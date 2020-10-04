import React from "react";
import { View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { Resume } from "../../interface/resume.interface";
import styled from "@react-pdf/styled-components";
import moment from "moment";

Font.register({
  family: "Karla",
  format: "truetype",
  src:
    "https://fonts.gstatic.com/s/karla/v13/qkBbXvYC6trAT4RS.ttf",
});

Font.register({
  family: "Karla-Bold",
  format: "truetype",
  src:
    "https://fonts.gstatic.com/s/karla/v13/qkBWXvYC6trAT7zuC_m-.ttf",
});

const styles = StyleSheet.create({
  link: { textDecoration: "none", color: "inherit" },
  body: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "40px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: "6px",
  },
  text1: {
    flex: 1,
    lineHeight: "14px",
  },
  text: {
    flex: 3,
    paddingRight: "70px",
    paddingTop: "20px",
    lineHeight: "14px",
  },
  text2: {
    flex: 45,
    lineHeight: "14px",
    // paddingRight: "70px",
  },
  text3: {
    flex: 55,
    lineHeight: "14px",
  },
  box: {
    flex: 3,
    backgroundColor: "#FFD84C",
    height: "42",
    width: "42",
    borderRadius: "21"
  },
  border: {
    backgroundColor: "#0C0C0C",
    height: "1",
  },
});

const Heading = styled.Text`
  font-size: 20px;
`;

const Subtitle = styled.Text`
  font-size: 9px;
  font-family: "Karla-Bold";
  padding-bottom: 10px;
`;

const Body = styled.Text`
  font-size: 9px;
`;
const BodyBold = styled.Text`
  font-size: 9px;
  font-family: "Karla-Bold";
`;

const PPage = styled.Page`
  padding: 60px;
  padding-top: 46px;
  font-family: "Karla";
`;


const PdfDocument2: React.FunctionComponent<Resume> = ({
  user,
  resume,
  educations,
  jobs,
}: Resume) => {
  return (
    <Document>
      <PPage size="A4">
        <View style={styles.body}>
          <View style={styles.text}>
            <Heading>
              {user.firstName}
            </Heading>
            <Heading>
              {user.lastName}
            </Heading>
          </View>
          <View style={styles.text1}>
            <Body>{resume.title}</Body>
            <Body>{user.email}</Body>
            <Body>{user.phoneNumber}</Body>
            <Body>{resume.location}</Body>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.text2}>
            <View style={styles.box} />
          </View>
          <View style={styles.text3}>
            <Body>{resume.bio}</Body>
          </View>
        </View>
        <Subtitle>Work Experience</Subtitle>
        {jobs.map(
          (
            job: {
              title: any;
              company: any;
              location: any;
              description: any;
              dateFrom: moment.MomentInput;
              dateTo: moment.MomentInput;
            },
            i: string | number | null | undefined
          ) => (
            <View key={i} style={styles.body}>
              <View style={styles.text2}>
                <BodyBold>
                  {job.title} at {job.company}
                </BodyBold>
              
                <Body>
                  {moment(job.dateFrom).format("MMMM YYYY")} - 
                  {moment(job.dateTo).format("MMMM YYYY")}
                </Body>
              </View>
              <View style={styles.text3}>
              <Body>{job.description}</Body>
              </View>
            </View>
          )
        )}
        {educations.map(
          (
            education: { place: any; info: any; yearFrom: any; yearTo: any },
            i: string | number | null | undefined
          ) => (
            <View key={i} style={styles.body}>
              <View style={styles.text2}>
                <Subtitle>{i ===0 && "Education"}</Subtitle>
              </View>
              <View style={styles.text3}>
                <Body>{education.info} at {education.place}</Body>
                <Body>
                  {education.yearFrom} - {education.yearTo}
                </Body>
              </View>
            </View>
          )
        )} 
      </PPage>
    </Document>
  );
};

export default PdfDocument2;
