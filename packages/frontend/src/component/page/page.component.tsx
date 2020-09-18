import * as React from 'react';
import { Button, Typography } from '@material-ui/core';
import {PDFViewer, PDFDownloadLink,  Page as PDFPage, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';

const styles = StyleSheet.create({
  page: { backgroundColor: 'tomato' },
  section: { color: 'white', textAlign: 'center', margin: 30 }
});

const doc = (
  <Document>
    <PDFPage size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Example resume template</Text>
      </View>
    </PDFPage>
  </Document>
);

export const Page: React.FunctionComponent = () => (
    // eslint-disable-next-line react/jsx-indent
    <ThemeProvider>
      <Navbar />
      <Typography variant="h1">Responsive h1</Typography>
      <PDFViewer>
        {doc}
      </PDFViewer>
      <Button color="secondary" variant="contained">
        <PDFDownloadLink document={doc} fileName="example.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </Button>
    </ThemeProvider>
  );

export default Page;
