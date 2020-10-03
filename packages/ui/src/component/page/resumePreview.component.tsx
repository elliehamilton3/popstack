import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useState } from "react";
import PdfDocument from "./pdfDocument.component";
import { BlobProvider } from "@react-pdf/renderer";
import {
  Document as Doc,
  Page as DocPage,
} from "react-pdf/dist/esm/entry.webpack";
import { Resume } from "../../interface/resume.interface";

export interface IResumePreviewProps {
  resume: Resume | undefined;
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

const ResumePreview: React.FunctionComponent<IResumePreviewProps> = ({
  resume,
}: IResumePreviewProps) => {
  const classes = useStyles();
  const [generatedResume, setGeneratedResume] = useState("");
  const [numPages, setNumPages] = useState(1);

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
        {resume && (
          <BlobProvider document={<PdfDocument {...resume} />}>
            {({ url }) => {
              setGeneratedResume(url ? url : "");
              return <></>;
            }}
          </BlobProvider>
        )}
      </Paper>
    </Box>
  );
};

export default ResumePreview;
