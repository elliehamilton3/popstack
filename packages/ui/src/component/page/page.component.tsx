import React, {useEffect, useState} from 'react';
import { Button, Typography, Grid, TextField, Box, Paper, makeStyles,lighten, Accordion, AccordionDetails, AccordionSummary, Container} from '@material-ui/core';
import { BlobProvider, PDFDownloadLink, Page as PDFPage, pdf, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
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


Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  page: { },
  viewer: { border: 0 },
  section: { color: 'black', textAlign: 'center', margin: 30, fontFamily: 'Oswald' },
  link: { textDecoration: "none", color:"inherit"}
});

// justify-content: space-between;
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
      minHeight: "400px",
      "@media (min-width: 600px)":{
        width: "calc(50vw - 80px)",
        minHeight: "600px",
      },
    "& canvas": {
      width: "100% !important",
      height: "auto !important"
    },
    "& div div div": {
      display: "none"
    }
  },
  loading: {
    width: "100px",
    height: "100px"
  }
}));

interface Resume {
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
    name: string;
    email: string;
    phoneNumber: string;
  };
}

export const Page: React.FunctionComponent = () => { 
  const [resume, setResume] = useState<Resume | undefined>(undefined);
  const classes = useStyles();
  const doc = (
    <Document>
      <PDFPage size="A4" style={styles.page}>
      <View style={styles.section}>
          <Text>{resume && resume.user.name}</Text>
          <Text>{resume && resume.user.email}</Text>
          <Text>{resume && resume.user.phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text>{resume && resume.resume.title}</Text>
          <Text>{resume && resume.resume.location}</Text>
          <Text>{resume && resume.resume.bio}</Text>
        </View>
        {resume && resume.jobs.map((job, i) => (
          <View style={styles.section} key={i}>
            <Text>{job.title}</Text>
            <Text>{job.company}</Text>
            <Text>{job.location}</Text>
            <Text>{job.description}</Text>
            <Text>{job.dateFrom}</Text>
            <Text>{job.dateTo}</Text>
          </View>
        ))}
        {resume && resume.educations.map((education, i) => (
          <View style={styles.section} key={i}>
            <Text>{education.place}</Text>
            <Text>{education.yearFrom}</Text>
            <Text>{education.yearTo}</Text>
            <Text>{education.info}</Text>
          </View>
        ))}
      </PDFPage>
    </Document>
  );

  const [generatedResume, setGeneratedResume] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch("/resume/0", "GET").then(json => {
      console.log("resume")
      setResume(json as Resume)
      setLoading(false)
    }); 
    
  }, []);

  const [numPages, setNumPages] = useState(1);
 
  function onDocumentLoadSuccess({numPages}: any) {
    setNumPages(numPages);
  }
  const loadingComponent =( 
      <Grid container>
        <Grid item >
          {/* <Skeleton animation="wave" /> */}
        </Grid>
      </Grid>
    );

  return (
    <ThemeProvider>
      <Navbar />
      <Grid container >
      <Grid item xs={12} sm={6}>
        <Box bgcolor="secondary.main" p={5} >
          <Paper elevation={8} className={classes.paper} >
            {loading ? loadingComponent  : <Doc
              file={generatedResume}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={loadingComponent}
            >
              <DocPage pageNumber={numPages} style={{width: "0px"}}/>
            </Doc> }
            <BlobProvider document={doc}>
              {({url}) => {
                console.log(url)
                setGeneratedResume(url ? url : "")
                return <></>;
              }}
            </BlobProvider>
       
          </Paper>
          </Box> 
         </Grid> 
       <Grid item xs={12} sm={6}>
      <Box p={3} pt={4}>
        <Grid container direction="column">
          <Box pb={4}>
          <Grid item> 
          <Grid container justify="space-between" alignItems="center">
            <Grid item> <Typography variant="h1">Your Resumé</Typography></Grid>
            <Grid item> <Button variant="outlined">
                <PDFDownloadLink document={doc} fileName="example.pdf"  style={styles.link}>
                  {({ loading }) => (loading ? 'Loading document...' : 'Download')}
                </PDFDownloadLink>
              </Button></Grid>
            </Grid>
          </Grid> 
          </Box>
          <Box pb={8}>
          <Grid item container direction="column" spacing={2}>
            <Grid item> <CircleIcon/></Grid>
            <Grid item> <Typography variant="h2">Personal Details</Typography></Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic" helperText="First name" fullWidth variant="filled" /></Grid>
                <Grid item sm={6}><TextField id="filled-basic1" helperText="Last name" fullWidth variant="filled" /></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic2" helperText="Email address" fullWidth variant="filled" /></Grid>
                <Grid item sm={6}><TextField id="filled-basic3" helperText="Phone number" fullWidth variant="filled" /></Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="flex-end">
                <Grid item sm={6}><TextField id="filled-basic4" helperText="Job title" fullWidth variant="filled" /></Grid>
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
        </Grid>
        </Box>
       </Grid>
      </Grid> 
    </ThemeProvider>
  )};

export default Page;
