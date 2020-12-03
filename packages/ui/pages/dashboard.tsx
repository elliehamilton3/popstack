import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/navbar/navbar.component";
import { Typography, Grid, Paper, Box, IconButton} from "@material-ui/core";
import { ResumeListItem } from "../interface/resume.interface";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import GetAppIcon from '@material-ui/icons/GetApp';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Dashboard() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [resumeList, setResumeList] = useState<ResumeListItem[]>();

  useEffect(() => {
    getUserData();
  }, [user]);

  const getUserData = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `http://localhost:3001/v1/users/me`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      const resumes = responseData.resumes.map((resume:any) => ({id: resume.id, type: "Resume", title: "Alexandra's resume"}))
      setResumeList(resumes)

    } catch (error) {
      console.log(error.message);
    }
  };

  const createResume = async () => {
    try {
      const token = await getAccessTokenSilently();

      await fetch(
        `http://localhost:3001/v1/resume/0`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          method: "POST"
        }
      );

      getUserData()

    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
        <Navbar />
        <Box p={12} bgcolor="#ffdbeb" minHeight="100vh">
        {isAuthenticated ? (<>
            <Box pb={5}>
          <Typography variant="h2">My resumes and cover letters</Typography>
          <Typography>{user.email}</Typography>
          </Box>
          <Grid container spacing={4}>
          {resumeList && resumeList.map((resume, i) => (
            <Grid item xs={4} sm={3} key={i}>
              <Grid container direction="column">
              <Grid item><Paper style={{height: "calc(46vw - 180px)", width: "100%"}}>
              <Grid container justify="space-between" alignContent="center" style={{height: "100%"}} direction="column">
              <Grid item>
            <IconButton ><DeleteForeverIcon/></IconButton>
            </Grid>
            <Grid item>
            <IconButton ><LaunchIcon/></IconButton>
            </Grid>
            <Grid item>
            <IconButton ><GetAppIcon/></IconButton>
            </Grid>
            </Grid>
                </Paper></Grid>
              <Grid item> <Box pt={1}> <Typography>{resume.type} - {resume.id}</Typography></Box></Grid>
              <Grid item> <Typography style={{fontWeight: 700}}>{resume.title}</Typography></Grid>
                </Grid>
            </Grid>
          ))}
          <Grid item xs={4} sm={3} ><Paper style={{height: "calc(46vw - 180px)", width: "100%"}}>
            <Grid container justify="center" alignContent="center" style={{height: "100%"}}>
              <Grid item>
            <IconButton onClick={() => createResume()}><AddIcon/></IconButton>
            </Grid>
            </Grid>
            </Paper></Grid>
          </Grid>
</>
        )    
        : <></>}
                  </Box>
      </>
  )
}