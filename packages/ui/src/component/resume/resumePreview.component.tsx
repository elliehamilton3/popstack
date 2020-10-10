import { Box, Grid, Paper, Typography, makeStyles, Button } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "40px",

      minHeight:  "calc(100vh - 176px)",
      minWidth: 0

  },
  pdfStyles: {
    "& canvas": {
  
      borderRadius: "4px",

        height: "calc(100vh - 200px) !important",
        width: "auto !important",
    },
    "& div div div": {
      display: "none",
    },
  },
  box: {
    backgroundColor: "#2C6DC5",
    padding: "40px",
    height: "calc(100vh - 64px)",
    "@media (min-width: 960px)": {
      position: "fixed",
      width: "50%",
      top: "64px",
      padding: 0,
    }
  },
  button: {
    backgroundColor: theme.palette.common.white
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
    <Box className={classes.box}>
      <Grid container alignItems="center" direction="column" spacing={2}>
        <Grid item>
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
      </Grid>
      <Grid item>
                        <Button
                          variant="contained"
                          className={classes.button}
                          disabled={!resume}
                          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          onClick={() => generatePdfDocument(resume!, resumeStyle)}
                        >
                          Download as PDF
                        </Button>
                      </Grid>
      </Grid>
    </Box>
  );
};

export default ResumePreview;
