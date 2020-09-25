import React, {useEffect, useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import {PDFViewer, PDFDownloadLink,  Page as PDFPage, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';
import backendFetch from '../../service/backendFetch.service';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 }
});

export const Page: React.FunctionComponent = () => { 
  const [resume, setResume] = useState({});
  const doc = (
    <Document>
      <PDFPage size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{JSON.stringify(resume)}</Text>
        </View>
      </PDFPage>
    </Document>
  );

  useEffect(() => {
    backendFetch("/resume/0", "GET").then(json => setResume(json)); 
    console.log(resume)
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
