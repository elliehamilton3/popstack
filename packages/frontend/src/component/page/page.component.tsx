import React, {useEffect, useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import {PDFViewer, PDFDownloadLink,  Page as PDFPage, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';
import backendFetch from '../../service/backendFetch.service';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'black', textAlign: 'center', margin: 30 }
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
        {console.log(resume)}
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
        {resume && resume.jobs.map((job) => {
          <View style={styles.section}>
          <Text>{job.title}</Text>
          <Text>{job.company}</Text>
          <Text>{job.location}</Text>
          <Text>{job.description}</Text>
          <Text>{job.dateFrom}</Text>
          <Text>{job.dateTo}</Text>
        </View>
        })}
        {resume && resume.educations.map((education) => {
          <View style={styles.section}>
          <Text>{education.place}</Text>
          <Text>{education.yearFrom}</Text>
          <Text>{education.yearTo}</Text>
          <Text>{education.info}</Text>
        </View>
        })}
      </PDFPage>
    </Document>
  );

  useEffect(() => {
    backendFetch("/resume/0", "GET").then(json => setResume(json as Resume)); 
  }, []);
  return (
    // eslint-disable-next-line react/jsx-indent
    <ThemeProvider>
      <Navbar />
      <Typography variant="h1">Responsive h1</Typography>
      {JSON.stringify(resume)}
      <PDFViewer>
        {doc}
      </PDFViewer>
      <Button color="secondary" variant="contained">
        <PDFDownloadLink document={doc} fileName="example.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </Button>
    </ThemeProvider>
  )};

export default Page;
