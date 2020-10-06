import { makeStyles, Box, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  section1: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  }
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
    </ThemeProvider>
  );
};

export default Page1;
