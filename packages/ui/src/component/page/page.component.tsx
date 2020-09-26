import React, {useEffect, useState} from 'react';
import { Button, Typography, Grid, TextField, Box} from '@material-ui/core';
import {PDFViewer, PDFDownloadLink,  Page as PDFPage, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import {Document as Doc, pdfjs} from "react-pdf";
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';
import apiFetch from '../../service/apiFetch.service';
import CircleIcon from '../icons/circle.icon';
import ParallelogramIcon from '../icons/parallelogram.icon';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import samplePdf from './sample.pdf'
import TeardropIcon from '../icons/teardrop.icon';
import HalfCircleIcon from '../icons/halfCircle.icon';
import SquareIcon from '../icons/square.icon';
import RectangleIcon from '../icons/rectangle.icon';

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

  useEffect(() => {
    apiFetch("/resume/0", "GET").then(json => setResume(json as Resume)); 
  }, []);
  return (
    // eslint-disable-next-line react/jsx-indent
    <ThemeProvider>
      <Navbar />
      <Grid container spacing={3}>
      <Grid item sm={6}>
        <Box bgcolor="secondary.main" p={5} style={{height: "100%"}}>
        <PDFViewer width="100%" height="100%" style={styles.viewer}>
           {doc}
         </PDFViewer>
          </Box>
        </Grid>
      <Grid item sm={6}>
      <Box p={3} pt={4}>
        <Grid container direction="column" spacing={2}>
          <Grid item> 
          <Grid container  justify="space-between" alignItems="center">
          <Grid item> <Typography variant="h1">Your Resumé</Typography></Grid>
          <Grid item> <Button variant="outlined">
              <PDFDownloadLink document={doc} fileName="example.pdf"  style={styles.link}>
                {({ loading }) => (loading ? 'Loading document...' : 'Download')}
              </PDFDownloadLink>
            </Button></Grid>
          </Grid>
          </Grid>
          <Grid item> <CircleIcon/></Grid>
          <Grid item> <Typography variant="h2">Personal Details</Typography></Grid>
          <Grid item><TextField id="filled-basic"  variant="filled" /></Grid>
          <Grid item><TextField id="filled-basic1"  variant="filled" /></Grid>
          <Grid item> <ParallelogramIcon/></Grid>
          <Grid item> <Typography variant="h2">Describe you and your work</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Summarise your professional career in 2 or 3 sentences.</Typography></Grid>
          <Grid item> <TextField
              style={{width: "100%"}}
              id="filled-textarea"
              placeholder="Placeholder"
              multiline
              variant="filled"
              rows={4}
            />
          </Grid>
          <Grid item> <TeardropIcon/></Grid>
          <Grid item> <Typography variant="h2">Employment history</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</Typography></Grid>
          <Grid item> <HalfCircleIcon/></Grid>
          <Grid item> <Typography variant="h2">Education</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">If it’s relevant to your work, you can choose to include any recent educational achievements and the dates here.</Typography></Grid>
          <Grid item> <RectangleIcon/></Grid>
          <Grid item> <Typography variant="h2">Websites &amp; social media links</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Include a link to your personal website or portfolio, Github repository, LinkedIn, or anything you might want potential employers to see.</Typography></Grid>
          <Grid item> <SquareIcon/></Grid>
          <Grid item> <Typography variant="h2">Skills</Typography></Grid>
          <Grid item> <Typography variant="subtitle1">Add any skills you have that you want to highlight.</Typography></Grid>

        </Grid>
        </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )};

export default Page;
