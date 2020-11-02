import React, { useEffect, useState } from "react";
import { useAuth0 , withAuthenticationRequired} from "@auth0/auth0-react";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import { Typography, Grid, Paper, Box} from "@material-ui/core";
import apiFetch from "../../service/apiFetch.service";
import { ResumeListItem } from "../../interface/resume.interface";

const Profile: React.FunctionComponent = () => {
  const { user, isAuthenticated } = useAuth0();
  const [resumeList, setResumeList] = useState<ResumeListItem[]>();

  useEffect(() => {
    apiFetch("/users/me", "GET", {}, {auth: {strategy: "jwt", }}).then((json) => {
      const resumes = json.resumes.map((resume:any) => ({id: resume.id, type: "Resume", title: "Alexandra's resume"}))
      setResumeList(resumes)
    });
  }, []);

  return <ThemeProvider>
  <Navbar />
  <Box pt={10} bgcolor="#ffb7d5">
  {isAuthenticated ? (
        <>
        <Typography variant="h1">My resumes and cover letters</Typography>
        <Typography variant="h1">{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.sub}</Typography>
        <Grid container>
        {resumeList && resumeList.map(resume => (
          <Grid item>
            <Grid container direction="column">
            <Grid item><Paper style={{height: "150px", width: "100px"}}/></Grid>
            <Grid item> <Typography>{resume.id}</Typography></Grid>
            
            <Grid item> <Typography>{resume.type}</Typography></Grid>
            <Grid item> <Typography>{resume.title}</Typography></Grid>
             </Grid>
          </Grid>
        ))}
        </Grid>
        </>
    )    
        : <></>}
        </Box>
        </ThemeProvider>
};

export default withAuthenticationRequired(Profile);