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
    padding: "60px",
    paddingBottom: "16px",
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
    marginTop: "100px",
    flex: 3,
    backgroundColor: "#FFD84C",
    maxHeight: "42",
    width: "42",
    borderRadius: "21"
  },
  border: {
    backgroundColor: "#0C0C0C",
    height: "1",
  },
  info: {
    border: "1 solid #0C0C0C",
    padding: "35px",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "16px",
    margin: "0 24px",
    borderTop: "0px"
  },
  bio :{
    border: "1 solid #0C0C0C",
    borderRight: 0,
    padding: "34px",
    paddingRight: "104px",
    paddingTop: "104px"
  },
  education: {
    border: "1 solid #0C0C0C",
    padding: "35px",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "16px",
    paddingLeft: "60px",
    margin: "0px 24px 0px 0px",
    borderLeft: "0px"
  }
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
      <View style={styles.info}>
          <View style={styles.text}>
            <Heading>
              {user && user.firstName}
            </Heading>
            <Heading>
              {user && user.lastName}
            </Heading>
          </View>
          <View style={styles.text1}>
            <Body>{resume && resume.title}</Body>
            <Body>{user && user.email}</Body>
            <Body>{user && user.phoneNumber}</Body>
            <Body style={{paddingTop: "30px"}}>{resume && resume.location}</Body>
          </View>
        </View>
        <View style={{...styles.body, paddingRight: "0", position: "relative", top: '-100px'}}>
          <View style={styles.text2}>
            <View style={styles.box} />
          </View>
          <View style={{...styles.text3, ...styles.bio}}>
            <Body>{resume && resume.bio}</Body>
          </View>
        </View>
        <View style={{position: "relative", top: "-140px"}}>
        <View style={styles.body}>
        <Subtitle>Work Experience</Subtitle>
        </View>
        {jobs && jobs.map(
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
            <View key={i} style={{...styles.body, paddingTop: "0px"}}>
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
        <View style={styles.education}>
        {/* {educations.map(
          (
            education: { place: any; info: any; yearFrom: any; yearTo: any },
            i: string | number | null | undefined
          ) => (
            <> */}
              <View style={styles.text2}>
                <Subtitle>{"Education"}</Subtitle>
              </View>
              <View style={styles.text3}>
                <Body>{educations && educations[0].info} at {educations && educations[0].place}</Body>
                <Body>
                  {educations && educations[0].yearFrom} - {educations && educations[0].yearTo}
                </Body>
              </View>
              {/* </>
          )
        )}  */}
        </View>
        </View>
      </PPage>
    </Document>
  );
};

export default PdfDocument2;
