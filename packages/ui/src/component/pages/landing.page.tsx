import { makeStyles, Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  section1: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  section2: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  innerBox: {
    backgroundColor: theme.palette.primary.dark,
  },
  resumePaper: {
    maxWidth: "352px", 
    height: "428px", 
    position: "relative",
    top: "-100px"
  },
  section3: {
    backgroundColor: "#FFB7D5"
  },
  section4: {
    backgroundColor: "#FFD84C"
  },
}));

export const Page1: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <Navbar />
      <Box className={classes.section1} py={15}>
        <Grid container spacing={3} alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h1">Make your resumé pop.</Typography>
          </Grid>
          <Grid item style={{maxWidth: "370px"}}>
            <Typography variant="h3" align="center">Beautiful resumes, designed for professionals like you.</Typography>
          </Grid>
          <Grid item>
          <NavLink
            to="/resume"
            exact
            className="nav-link"
            activeClassName="active"
          >
            <Button variant="contained">Create my resume</Button>
          </NavLink>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.section2} p={5}>
      <Grid container spacing={3}>
        <Grid item sm={1}>
          <Paper className={classes.resumePaper} style={{marginLeft: "-100px"}}/>
        </Grid>
        <Grid item sm={4}>
        <Paper className={classes.resumePaper}/>
          </Grid>
        <Grid item sm={6}>
        <Box py={7} px={11} className={classes.innerBox} borderRadius="4px">
          <Typography variant="h3">Beautiful resumes</Typography>
          <Typography variant="body1">Our professionally designed resume templates take the hard work out of getting you and your work ready to be noticed. Customisable, easy to use and you can instantly export to PDF.</Typography>
        </Box>
        </Grid>
        <Grid item sm={1}>
          <Paper className={classes.resumePaper} style={{marginRight: "-100px"}}/>
        </Grid>
        </Grid>
      </Box>
      <Box className={classes.section1} p={5}>
      <Grid container spacing={3}>
     
        <Grid item sm={6}>
        <Box py={7} px={11} >
          <Typography variant="h3">Designed for professionals</Typography>
          <Typography variant="body1">Whether you're a copywriter, an engineer or a product designer, we've got all the bells and whistles to help you be successful with your job hunt. Add any sections that are relevant to your work, and remove anything that isn’t.</Typography>
        </Box>
        </Grid>
      </Grid>
      </Box>
      <Box className={classes.section3} p={5}>
      <Grid container spacing={3}>
        <Grid item sm={5}/>
        <Grid item sm={6}>
        <Box py={7} px={11} >
          <Typography variant="h3">Create multiple resumes and cover letters</Typography>
          <Typography variant="body1">Applying for a handful of jobs at the same time? Create as many CV's and cover letters as you need.</Typography>
        </Box>
        </Grid>
      </Grid>
      </Box>
      <Box className={classes.section4} p={5}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
        <Box py={7} px={11} >
          <Typography variant="h3">Custom fields</Typography>
          <Typography variant="body1">With the ability to add custom fields and rename any of the sections, you have complete control over your resume..</Typography>
        </Box>
        </Grid>
        <Grid item sm={6}>
        <Box py={7} px={11} >
          <Typography variant="h3">Super easy to update</Typography>
          <Typography variant="body1">Time for a change? All you need to do is log back in and update your info before you look for the next job – it's that easy.</Typography>
        </Box>
        </Grid>
      </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Page1;
