import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import {Resume} from './page.component'
import styled from '@react-pdf/styled-components';
import moment from 'moment';
    
    Font.register({
  family: 'Vollkorn',
  format: "truetype",
  src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGuGQ.ttf'
});

Font.register({
  family: 'Vollkorn-Bold',
  format: "truetype",
  src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df27nauGQ.ttf'
});

Font.register({
  family: 'Vollkorn-Medium',
  format: "truetype",
  src: 'https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2AnGuGQ.ttf'
});


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
    font-family: 'Vollkorn-Medium';
  `;
  
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
    font-family: 'Vollkorn-Bold';
  `;
  
  const PPage = styled.Page`
    padding: 49px;
    padding-top: 0px;
    padding-right: 61px;
    font-family: 'Vollkorn';
  `;


export const PdfDocument: React.FunctionComponent<Resume> = ({user,resume, educations, jobs}: Resume) => { 
    return (
    <Document>
    <PPage size="A4">
         <View style={styles.body} >
         <View style={styles.text}>
         </View>
         <View style={styles.box} />
         </View>
       <View style={styles.body} >
         <View style={styles.text}>
         <Heading>{user.name}</Heading>
         <Body>{resume.bio}</Body>
       </View>
         <View style={styles.text1}>
           <Body>{resume.title}</Body>
           <Body>{user.email}</Body>
           <Body>{user.phoneNumber}</Body>
           <Body>{resume.location}</Body>
         </View>
         </View>
         <View style={styles.border} />
         <Subtitle>Work Experience</Subtitle>
         {jobs.map((job, i) => (
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
         {educations.map((education, i) => (
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
 )};

   export default PdfDocument;