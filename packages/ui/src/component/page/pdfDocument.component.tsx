import React from "react";
import { View, Document, StyleSheet, Font, pdf } from "@react-pdf/renderer";
import { Resume } from "../../interface/resume.interface";
import styled from "@react-pdf/styled-components";
import moment from "moment";
import { saveAs } from "file-saver";

Font.register({
  family: "Vollkorn",
  format: "truetype",
  src:
    "https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2MHGuGQ.ttf",
});

Font.register({
  family: "Vollkorn-Bold",
  format: "truetype",
  src:
    "https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df27nauGQ.ttf",
});

Font.register({
  family: "Vollkorn-Medium",
  format: "truetype",
  src:
    "https://fonts.gstatic.com/s/vollkorn/v12/0ybgGDoxxrvAnPhYGzMlQLzuMasz6Df2AnGuGQ.ttf",
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
    flex: 3,
    lineHeight: "14px",
  },
  text: {
    flex: 5,
    paddingRight: "70px",
    lineHeight: "14px",
  },
  box: {
    flex: 3,
    backgroundColor: "#FFB7D5",
    height: "95",
    maxWidth: "86",
    position: "relative",
    left: "-72",
  },
  border: {
    backgroundColor: "#0C0C0C",
    height: "1",
  },
});

const Heading = styled.Text`
  font-size: 23px;
  padding-bottom: 26px;
  font-family: "Vollkorn-Medium";
`;

const Subtitle = styled.Text`
  text-transform: uppercase;
  padding-bottom: 15px;
  padding-top: 21px;
  font-size: 9px;
`;

const Body = styled.Text`
  font-size: 9px;
`;
const BodyBold = styled.Text`
  font-size: 9px;
  font-family: "Vollkorn-Bold";
`;

const PPage = styled.Page`
  padding: 49px;
  padding-top: 0px;
  padding-right: 61px;
  font-family: "Vollkorn";
`;

export const generatePdfDocument = async (documentData: Resume) => {
  const blob = await pdf(<PdfDocument {...documentData} />).toBlob();
  saveAs(blob, "cv.pdf");
};

export const PdfDocument: React.FunctionComponent<Resume> = ({
  user,
  resume,
  educations,
  jobs,
}: Resume) => {
  return (
    <Document>
      <PPage size="A4">
        <View style={styles.header}>
          <View style={styles.text} />
          <View style={styles.box} />
        </View>
        <View style={styles.body}>
          <View style={styles.text}>
            <Heading>
              {user.firstName} {user.lastName}
            </Heading>
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
        {jobs.map((job: { title: any; company: any; location: any; description: any; dateFrom: moment.MomentInput; dateTo: moment.MomentInput; }, i: string | number | null | undefined) => (
          <View key={i} style={styles.body}>
            <View style={styles.text}>
              <BodyBold>
                {job.title} at {job.company}
              </BodyBold>
              <Body>{job.location}</Body>
              <Body>{job.description}</Body>
            </View>
            <View style={styles.text1}>
              <Body>
                {moment(job.dateFrom).format("MMMM YYYY")} -{" "}
                {moment(job.dateTo).format("MMMM YYYY")}
              </Body>
            </View>
          </View>
        ))}
        <View style={styles.border} />
        <Subtitle>Education</Subtitle>
        {educations.map((education: { place: any; info: any; yearFrom: any; yearTo: any; }, i: string | number | null | undefined) => (
          <View key={i} style={styles.body}>
            <View style={styles.text}>
              <BodyBold>{education.place}</BodyBold>
              <Body>{education.info}</Body>
            </View>
            <View style={styles.text1}>
              <Body>
                {education.yearFrom} - {education.yearTo}
              </Body>
            </View>
          </View>
        ))}
      </PPage>
    </Document>
  );
};

export default PdfDocument;
