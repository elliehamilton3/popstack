import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import PdfDocument from "./pdfDocument.component";
import PdfDocument2 from "./pdfDocument2.component";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import {
  Document as Doc,
  Page as DocPage,
} from "react-pdf/dist/esm/entry.webpack";
import { Resume } from "../../interface/resume.interface";
import blobStream from 'blob-stream';

export interface IResumePreviewProps {
  resume: Resume | undefined;
  resumeStyle: 1 | 2;
}

const useStyles = makeStyles(() => ({
  paper: {
    width: "calc(100vw - 80px)",
    minHeight: "calc(147vw - 80px)",
    "@media (min-width: 600px)": {
      width: "calc(50vw - 80px)",
      minHeight: "586px",
    },
  },
  pdfStyles: {
    "& canvas": {
      width: "100% !important",
      height: "auto !important",
      borderRadius: "4px",
    },
    "& div div div": {
      display: "none",
    },
  },
}));

export const generatePdfDocument = async (documentData: Resume, resumeStyle: number) => {
  if(resumeStyle === 2) {
    const blob = await pdf(<PdfDocument2 {...documentData} />).toBlob();
    saveAs(blob, "cv.pdf");
  }
  else if(resumeStyle === 1) {
    const blob = await pdf(<PdfDocument {...documentData} />).toBlob();
    saveAs(blob, "cv.pdf");
  }
};

const ResumePreview: React.FunctionComponent<IResumePreviewProps> = ({
  resume,
  resumeStyle
}: IResumePreviewProps) => {
  const classes = useStyles();
  const [generatedResume, setGeneratedResume] = useState<string>();
  const [numPages, setNumPages] = useState(1);
  
  const bufferToUrl = async (buffer: any) => {
      const stream = buffer.pipe(blobStream());

      const url:string = await new Promise((resolve, reject) => {
        stream.on('finish', () => {
          resolve(stream.toBlobURL('application/pdf'));
        });
        stream.on('error', reject);
      });

      setGeneratedResume(url ? url : "");
  }

  useEffect(() => {
    if(resume) {
      if(resumeStyle === 2) {
        pdf(<PdfDocument2 {...resume!} />).toBuffer().then(bufferToUrl)
      }
      else if(resumeStyle === 1) {
        pdf(<PdfDocument {...resume!} />).toBuffer().then(bufferToUrl)
      }
    }  
  }, [resumeStyle, resume]);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const loadingComponent = (
    <Box p={4}>
      <Grid container>
        <Grid item>
          <Typography variant="h1">
            <Skeleton width="200px" />
          </Typography>
          <Typography variant="h2">
            <Skeleton width="120px" />
          </Typography>
          <Typography variant="body1">
            <Skeleton width="80px" />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <Box bgcolor="#333333" p={5}>
      <Paper
        elevation={8}
        className={`${classes.paper} ${generatedResume && classes.pdfStyles}`}
      >
        {!generatedResume ? (
          loadingComponent
        ) : (
          <Doc
            file={generatedResume}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={loadingComponent}
          >
            <DocPage pageNumber={numPages} style={{ width: "0px" }} />
          </Doc>
        )}
      </Paper>
    </Box>
  );
};

export default ResumePreview;