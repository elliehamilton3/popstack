import React, {useEffect, useState} from 'react';
import { Button, Typography, Grid, TextField, Box, Paper, makeStyles,lighten, Accordion, AccordionDetails, AccordionSummary} from '@material-ui/core';
import { BlobProvider, PDFDownloadLink, Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
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
import styled from '@react-pdf/styled-components';
import moment from 'moment';

// Font.register({
//   family: 'Vollkorn',
//   format: "truetype",
//   src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGuGQ.ttf'
// });

// Font.register({
//   family: 'Vollkorn-Bold',
//   format: "truetype",
//   src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df27nauGQ.ttf'
// });

// Font.register({
//   family: 'Vollkorn-Medium',
//   format: "truetype",
//   src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2AnGuGQ.ttf'
// });


const styles = StyleSheet.create({
  link: { textDecoration: "none", color:"inherit"},
  body: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "40px",
  },
  text1: {
    flex: 3,
    lineHeight: "14px"
  },
  text: {
    flex: 5,
    paddingRight: "70px",
    lineHeight: "14px"
  },
  box: {
    flex: 3,
    backgroundColor: "#FFB7D5",
    height: "95",
    maxWidth: "86",
    position: "relative",
    left: "-72"
  },
  border: {
    backgroundColor: "#0C0C0C",
    height: "1",
  },
});

const Heading = styled.Text`
  font-size: 23px;
  padding-bottom: 26px;
`;
// font-family: 'Vollkorn-Medium';

const Subtitle = styled.Text`
  text-transform: uppercase;
  padding-bottom:15px;
  padding-top:21px;
  font-size: 9px;
`;

const Body = styled.Text`
  font-size: 9px;
`;
const BodyBold = styled.Text`
  font-size: 9px;
`;

// font-family: 'Vollkorn-Bold';

const PPage = styled.Page`
  padding: 49px;
  padding-top: 0px;
  padding-right: 61px;
`;

// font-family: 'Vollkorn';

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

export const Page1: React.FunctionComponent = () => { 
  const [resume, setResume] = useState<Resume | undefined>(undefined);
  const classes = useStyles();
  const doc = resume ? (
    <Document>
       <PPage size="A4">
            <View style={styles.body} >
            <View style={styles.text}>
            </View>
            <View style={styles.box} />
            </View>
          <View style={styles.body} >
            <View style={styles.text}>
            <Heading>{resume.user.name}</Heading>
            <Body>{resume.resume.bio}</Body>
          </View>
            <View style={styles.text1}>
              <Body>{resume.resume.title}</Body>
              <Body>{resume.user.email}</Body>
              <Body>{resume.user.phoneNumber}</Body>
              <Body>{resume.resume.location}</Body>
            </View>
            </View>
            <View style={styles.border} />
            <Subtitle>Work Experience</Subtitle>
            {resume.jobs.map((job, i) => (
              <View key={i} style={styles.body}>
                <View style={styles.text}>
                <BodyBold>{job.title} at {job.company}</BodyBold>
                <Body>{job.location}</Body>
                <Body>{job.description}</Body>
                </View>
              <View style={styles.text1}>
                <Body>{moment(job.dateFrom).format('MMMM YYYY')} - {moment(job.dateTo).format('MMMM YYYY')}</Body>
                </View>
              </View>

            ))}
             <View style={styles.border} />
            <Subtitle>Education</Subtitle>
            {resume.educations.map((education, i) => (
              <View key={i} style={styles.body}>
                <View style={styles.text}>
                <BodyBold>{education.place}</BodyBold>
                <Body>{education.info}</Body>
                </View>
                <View style={styles.text1}>
                <Body>{education.yearFrom} - {education.yearTo}</Body>
              </View>
              </View>
            ))}
      </PPage> 
    </Document>
  ) :  <Document />;

  const [generatedResume, setGeneratedResume] = useState("");

  useEffect(() => {
    apiFetch("/resume/0", "GET").then(json => {
      setResume(json as Resume)
      console.log("resume")
    });  
  }, []);

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
        <Box bgcolor="secondary.main" p={5} >
          <Paper elevation={8} className={`${classes.paper} ${generatedResume && classes.pdfStyles}`} >
            {!generatedResume ? loadingComponent  : <Doc
              file={generatedResume}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={loadingComponent}
            >
              <DocPage pageNumber={numPages} style={{width: "0px"}}/>
            </Doc> }
            {resume && <BlobProvider document={doc}>
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
          <Box pb={4}>
          <Grid item> 
          <Grid container justify="space-between" alignItems="center">
            <Grid item> <Typography variant="h1">Your Resumé</Typography></Grid>
            <Grid item> 
                <PDFDownloadLink document={doc} fileName="example.pdf"  style={styles.link}>
                    {({ loading }) => (<Button variant="outlined" disabled={loading && !resume}>Download</Button>)}
                </PDFDownloadLink>
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

export default Page1;
