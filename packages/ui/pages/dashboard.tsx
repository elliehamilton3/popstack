import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/navbar/navbar.component";
import { Typography, Grid, Paper, Box, Button} from "@material-ui/core";
import { ResumeListItem } from "../interface/resume.interface";

export default function Dashboard() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [resumeList, setResumeList] = useState<ResumeListItem[]>();
  
    const callSecureApi = async () => {
      try {
        const token = await getAccessTokenSilently();
  
        const response = await fetch(
          `http://localhost:3000/v1/users/me`,
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
    return (
        <>
        <Navbar />
  <Box pt={10} bgcolor="#ffb7d5">
  {isAuthenticated ? (
        <>
        <Typography variant="h1">My resumes and cover letters</Typography>
        <Typography variant="h1">{user.name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>{user.sub}</Typography>
        <Button onClick={callSecureApi}>Get user</Button>
        <Grid container>
        {resumeList && resumeList.map((resume, i) => (
          <Grid item key={i}>
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
        </Box></>)
}