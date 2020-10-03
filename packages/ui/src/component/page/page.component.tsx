import React, {useEffect, useState} from 'react';
import { Button, Typography, Grid, TextField, Box, Paper, makeStyles,lighten, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import { BlobProvider, pdf } from '@react-pdf/renderer';
import { Document as Doc, Page as DocPage } from 'react-pdf/dist/esm/entry.webpack';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';
import apiFetch from '../../service/apiFetch.service';
import CircleIcon from '../icons/circle.icon';
import ParallelogramIcon from '../icons/parallelogram.icon';
import TeardropIcon from '../icons/teardrop.icon';
import HalfCircleIcon from '../icons/halfCircle.icon';
import SquareIcon from '../icons/square.icon';
import RectangleIcon from '../icons/rectangle.icon';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Skeleton } from '@material-ui/lab';
import PdfDocument from './pdfDocument.component';
import { saveAs } from 'file-saver';
import {getFormValues} from '../../helper/getFormValues'

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "space-between",
    color: lighten(theme.palette.common.black, 0.4),
    padding: "10px 16px"
  },
  icon: {
    color: lighten(theme.palette.primary.light, 0.7),
  },
  paper: {
    width: "calc(100vw - 80px)",
      minHeight: "calc(147vw - 80px)",
      "@media (min-width: 600px)":{
        width: "calc(50vw - 80px)",
        minHeight: "586px",
      },
   
  },
  pdfStyles: {
    "& canvas": {
      width: "100% !important",
      height: "auto !important",
      borderRadius: "4px"
    },
    "& div div div": {
      display: "none"
    }
  }
}));

export interface Resume {
  resume: {
    bio: string;
    title: string;
    location: string;
  };
  educations: {
    place: string;
    yearFrom: number;
    yearTo: number;
    info: string;
  }[];
  jobs: {
    company: string;
    title: string;
    location: string
    description: string;
    dateFrom: Date;
    dateTo: Date;
  }[];
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
}

const generatePdfDocument = async (documentData: Resume) => {
  const blob = await pdf((
      <PdfDocument
          {...documentData}
      />
  )).toBlob();
  saveAs(blob, 'democv.pdf');
};

export const Page1: React.FunctionComponent = () => { 
  const [resume, setResume] = useState<Resume | undefined>(undefined);
  const classes = useStyles();
  const formRef = React.useRef<HTMLFormElement>(null);

  const [generatedResume, setGeneratedResume] = useState("");

  useEffect(() => {
    apiFetch("/resume/0", "GET").then(json => {
      setResume(json as Resume)
    });  
  }, []);

  const updateResume = () => {
    const form = formRef.current as HTMLFormElement;
    const formData = getFormValues(form);
    apiFetch("/resume/0", "PATCH", formData).then(json => {
      setResume(json as Resume)
    });  
  }
  

  const [numPages, setNumPages] = useState(1);
 
  function onDocumentLoadSuccess({numPages}: any) {
    setNumPages(numPages);
  }
  const loadingComponent =( 
    <Box p={4}>
        <Grid container>
        <Grid item >
          <Typography variant="h1">
            <Skeleton width="200px"/>
          </Typography>
          <Typography variant="h2">
            <Skeleton width="120px"/>
          </Typography>
          <Typography variant="body1">
            <Skeleton width="80px"/>
          </Typography>
     
        </Grid>
      </Grid>
      </Box>
    
    );

  return (
    <ThemeProvider>
      <Navbar />
      <Grid container >
      <Grid item xs={12} sm={6}>
        <Box bgcolor="#333333" p={5} >
          <Paper elevation={8} className={`${classes.paper} ${generatedResume && classes.pdfStyles}`} >
            {!generatedResume ? loadingComponent  : 
            <Doc
              file={generatedResume}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={loadingComponent}
            >
              <DocPage pageNumber={numPages} style={{width: "0px"}}/>
            </Doc> }
            {resume && <BlobProvider document={<PdfDocument {...resume}/>}>
              {({url}) => {
                setGeneratedResume(url ? url : "")
                return <></>;
              }}
            </BlobProvider>}
       
          </Paper>
          </Box> 
         </Grid> 
       <Grid item xs={12} sm={6}>
      <Box p={3} pt={4}>
        <Grid container direction="column">
        <form ref={formRef} noValidate autoComplete="off">
          <Box pb={4}>
          <Grid item> 
          <Grid container justify="space-between" alignItems="center">
            <Grid item> <Typography variant="h1">Your Resumé</Typography></Grid>
            <Grid item> 
                <Button variant="outlined" disabled={!resume} onClick={() => generatePdfDocument(resume!)}>Download</Button>
              </Grid>
              <Grid item> 
                <Button variant="outlined" onClick={() => updateResume()}>Update</Button>
              </Grid>
            </Grid>
          </Grid> 
          </Box>
          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
            <Grid item> <CircleIcon/></Grid>
            <Grid item> <Typography variant="h2">Personal Details</Typography></Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic" name="firstName" helperText="First name" fullWidth variant="filled" /></Grid>
                <Grid item sm={6}><TextField id="filled-basic1" name="lastName" helperText="Last name" fullWidth variant="filled" /></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic2" name="email" helperText="Email address" fullWidth variant="filled" /></Grid>
                <Grid item sm={6}><TextField id="filled-basic3" name="phoneNumber" type="number" helperText="Phone number" fullWidth variant="filled" /></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic4" name="title" helperText="Job title" fullWidth variant="filled" /></Grid>
                <Grid item sm={6}><Button color="secondary" variant="outlined" className={classes.button} fullWidth endIcon={<AddIcon className={classes.icon}/>}>Add custom field</Button></Grid>
              </Grid>
            </Grid>
          </Grid>
          </Box>
          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
          <Grid item> <ParallelogramIcon/></Grid>
          <Grid item> <Typography variant="h2">Describe you and your work</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Summarise your professional career in 2 or 3 sentences.</Typography></Grid>
          <Grid item> <TextField
              fullWidth
              id="filled-textarea"
              placeholder="Placeholder"
              multiline
              variant="filled"
              rows={4}
            />
          </Grid>
          </Grid>
          </Box>
          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
          <Grid item> <TeardropIcon/></Grid>
          <Grid item> <Typography variant="h2">Employment history</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</Typography></Grid>
          <Grid item> <Button color="secondary" variant="outlined" className={classes.button} fullWidth endIcon={<AddIcon className={classes.icon}/>}>Add employment history</Button></Grid>
          </Grid>
          </Box>
          
          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
          <Grid item> <HalfCircleIcon/></Grid>
          <Grid item> <Typography variant="h2">Education</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">If it’s relevant to your work, you can choose to include any recent educational achievements and the dates here.</Typography></Grid>
          <Grid item>
          <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Grid container justify="space-between" alignItems="center">
                <Grid item >
                  <Grid container  direction="column">
                  <Grid item >
                <Typography variant="body2">BA (Hons) Fine Art</Typography>
                </Grid>
                <Grid item >
                <Typography >Central Saint Martins, London</Typography>
                </Grid>   </Grid></Grid>
                <Grid item>
                <Typography>2018 - 2020</Typography>
                </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                  sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item> <Button color="secondary" variant="outlined" className={classes.button} fullWidth endIcon={<AddIcon className={classes.icon}/>}>Add education</Button></Grid>
          </Grid>
          </Box>

          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
          <Grid item> <RectangleIcon/></Grid>
          <Grid item> <Typography variant="h2">Websites &amp; social media links</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Include a link to your personal website or portfolio, Github repository, LinkedIn, or anything you might want potential employers to see.</Typography></Grid>
          <Grid item> <Button color="secondary" variant="outlined" className={classes.button} fullWidth endIcon={<AddIcon className={classes.icon}/>}>Add website or link</Button></Grid>
          </Grid>
          </Box>

          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
          <Grid item> <SquareIcon/></Grid>
          <Grid item> <Typography variant="h2">Skills</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Add any skills you have that you want to highlight.</Typography></Grid>
          <Grid item> <Button color="secondary" variant="outlined" className={classes.button} fullWidth endIcon={<AddIcon className={classes.icon}/>}>Add a skill</Button></Grid>
          </Grid>
          </Box>
          </form>
        </Grid>
        </Box>
       </Grid>
      </Grid> 
    </ThemeProvider>
  )};

export default Page1;
