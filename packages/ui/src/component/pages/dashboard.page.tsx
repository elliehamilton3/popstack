import React from "react";
import { ThemeProvider } from "../../styles/theme";
import Navbar from "../navbar/navbar.component";
import { Grid, Typography } from "@material-ui/core";
import { useAuthState } from "../../store/auth.store";

const Profile: React.FunctionComponent =  () => {
  const [user] = useAuthState('user');

  return <ThemeProvider>
  <Navbar />
  <Grid container style={{paddingTop: "80px"}} direction="column" spacing={3}>
    <Grid item><Typography variant="h1">{user?.userUuid}</Typography></Grid>
    </Grid>
    </ThemeProvider>
};

export default Profile;