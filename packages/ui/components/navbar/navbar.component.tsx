import { AppBar, Toolbar, IconButton, Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useAuth0 } from "@auth0/auth0-react";
import Link from 'next/link'
import PopstackIcon from "../icons/popstack.icon";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
  logo: {
    "& rect": {
      transition: "transform 400ms ease"
    },
    "& circle:nth-of-type(1)": {
      transition: "transform 400ms ease"
    },
    "& circle:nth-of-type(2)": {
      transition: "transform 400ms ease"
    },
    "& path": {
      transition: "transform 400ms ease"
    },
    "&:hover": {
      "& rect": {

        transform: "translate(80px, -100px)",
        transition: "transform 400ms ease"
      },
      "& circle:nth-of-type(1)": {

        transform: "translate(-55px, 100px)",
        transition: "transform 400ms ease"
      },
      "& circle:nth-of-type(2)": {

        transform: "translate(100px, 0px)",
        transition: "transform 400ms ease"
      },
      "& path": {
        transform: "rotate(-15deg) translate(-30px, 20px)",
        transition: "transform 400ms ease"
      }
    }
  }

}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <AppBar position="fixed">
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
              <Link href="/">
                <Grid container spacing={2} alignItems="center">
                  
                  <Grid item>
                    <svg
                      height="32"
                      viewBox="-100 -50 600 360"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.logo}
                    >
                      <rect
                        x="148"
                        y="76.8728"
                        width="148"
                        height="148"
                        transform="rotate(-31.2927 148 76.8728)"
                        fill="#62CFF1"
      
                      />
                      <circle cx="70" cy="108" r="70" fill="#FFD84C" />
                      <circle cx="320" cy="242" r="70" fill="#FFB7D5" />
                      <path
                        d="M158 129L262.789 310.5H53.2109L158 129Z"
                        fill="#26C58C"
                      />
                    </svg>
         
                  </Grid>

                  <Grid item>
                  <PopstackIcon style={{height: "22px", width: "auto"}}/>
                  </Grid>

                </Grid>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              justify="space-between"
              container
              alignItems="center"
              spacing={2}
            >
              {!isAuthenticated ?
                <Grid item>
                  <Button
                  variant="contained"
                    color="primary"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in/sign up
                  </Button>
                </Grid>:
                <Grid item>
                  <Button
                  variant="contained"
                    color="primary"
                    onClick={() => logout()}
                  >
                    Log out
                  </Button>
                </Grid>}
              { user && user.userUuid && <Grid item>
              <Typography>Welcome {user.userUuid}</Typography>
              </Grid>}
              <Grid item>
              <Link href="/dashboard">
                  <IconButton color="primary">
                  <DashboardIcon />
                </IconButton>
                </Link>
                </Grid>
              <Grid item>
                <IconButton color="inherit">
                  <Menu />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
