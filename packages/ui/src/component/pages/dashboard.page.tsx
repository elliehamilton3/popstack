import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "../../styles/theme";
import Navbar from "../navbar/navbar.component";
import { Grid, Typography } from "@material-ui/core";

const Profile: React.FunctionComponent =  () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return  <ThemeProvider>
  <Navbar />
  <Grid container style={{paddingTop: "80px"}} direction="column" spacing={3}>
  {isAuthenticated ? <>
        <Grid item><Typography variant="h1">{user.name}</Typography></Grid>
        <Grid item><Typography variant="h2">{user.email}</Typography></Grid>
      </>:<Grid item><Typography variant="h1">Not logged in</Typography></Grid>}
      </Grid>
    </ThemeProvider>
};

export default Profile;