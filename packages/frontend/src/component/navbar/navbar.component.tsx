import * as React from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu, NewReleases,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },
  subtitle1: {
    color: theme.palette.common.white,
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    // eslint-disable-next-line react/jsx-indent
    <AppBar position="static" className={classes.root}>
      <Toolbar>

        <Grid
          justify="space-between"
          container
          alignItems="center"
          alignContent="center"
        >
          <Grid item>
            <Grid
              justify="space-between"
              container
              alignItems="center"
              alignContent="center"
              spacing={1}
            >
              <Grid item>
                <NewReleases color="inherit" />
              </Grid>
              <Grid item><Typography variant="h5">PopStack</Typography></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              justify="space-between"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <IconButton color="inherit"><Menu /></IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    // eslint-disable-next-line @typescript-eslint/indent
  );
};

export default Navbar;
