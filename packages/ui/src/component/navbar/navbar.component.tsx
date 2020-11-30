import * as React from "react";
import { AppBar, Toolbar, IconButton, Grid, makeStyles, Typography, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import DashboardIcon from '@material-ui/icons/Dashboard';
import { NavLink } from "react-router-dom";
// import { useAuthState } from '../../store/auth.store';
import { useAuth0 } from "@auth0/auth0-react";

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
    // logout,
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
              <NavLink
                to="/"
                exact
              >
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
                  <svg width="155" height="22" viewBox="0 0 155 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.93695 0.39394H1.09475C0.486557 0.39394 0 0.87879 0 1.48485V20.5152C0 21.1212 0.486557 21.6061 1.09475 21.6061H4.13573C4.71352 21.6061 5.20007 21.1212 5.20007 20.5152V15.303H7.93695C12.5592 15.303 16.3605 13 16.3605 8C16.3605 3.42424 13.2283 0.39394 7.93695 0.39394ZM7.93695 10.697H5.20007V5.27273H7.93695C9.944 5.27273 11.0996 6.36364 11.0996 8C11.0996 9.84849 9.82236 10.697 7.93695 10.697Z" fill="#0C0C0C"/>
                    <path d="M29.1905 0.0303047C22.8957 0.0303047 18.3647 4.72727 18.3647 11C18.3647 17.303 22.8957 22 29.1905 22C35.4854 22 40.0164 17.303 40.0164 11C40.0164 4.72727 35.4854 0.0303047 29.1905 0.0303047ZM29.1905 17C25.4806 17 23.5951 14 23.5951 11C23.5951 8 25.4806 5.0303 29.1905 5.0303C32.9005 5.0303 34.7859 8 34.7859 11C34.7859 14 32.9005 17 29.1905 17Z" fill="#0C0C0C"/>
                    <path d="M50.8492 0.39394H44.007C43.3988 0.39394 42.9122 0.87879 42.9122 1.48485V20.5152C42.9122 21.1212 43.3988 21.6061 44.007 21.6061H47.048C47.6258 21.6061 48.1123 21.1212 48.1123 20.5152V15.303H50.8492C55.4715 15.303 59.2727 13 59.2727 8C59.2727 3.42424 56.1405 0.39394 50.8492 0.39394ZM50.8492 10.697H48.1123V5.27273H50.8492C52.8563 5.27273 54.0118 6.36364 54.0118 8C54.0118 9.84849 52.7346 10.697 50.8492 10.697Z" fill="#0C0C0C"/>
                    <path d="M71.0384 9C69.3963 8.54546 66.8419 8.15152 66.8419 6.48485C66.8419 5.27273 67.8758 4.45455 69.3963 4.45455C70.8256 4.45455 71.677 5.06061 72.1028 5.81818C72.3461 6.21212 72.8326 6.39394 73.2888 6.30303L76.0561 5.60606C76.7251 5.45455 77.0596 4.72727 76.7859 4.12121C75.5999 1.48485 72.8326 0 69.6092 0C65.1998 0 61.7939 2.42424 61.7939 6.51515C61.7939 10.0606 63.7401 12 67.9975 13.0606C70.3998 13.6667 72.4677 13.8788 72.4677 15.4848C72.4677 16.8788 71.1601 17.5758 69.3659 17.5758C67.5717 17.5758 66.477 16.7576 65.96 15.8485C65.6863 15.3939 65.1694 15.2121 64.6828 15.3636L61.9155 16.2121C61.3073 16.4242 60.9728 17.0909 61.2161 17.6667C62.5541 20.7576 65.8992 21.9697 69.4267 21.9697C74.7484 21.9697 77.759 18.8485 77.759 15.3939C77.759 12.0606 76.2385 10.4545 71.0384 9Z" fill="#0C0C0C"/>
                    <path d="M93.3198 0.39394H80.3348C79.7266 0.39394 79.2401 0.87879 79.2401 1.48485V4.21212C79.2401 4.78788 79.7266 5.27273 80.3348 5.27273H84.2273V20.5152C84.2273 21.1212 84.7138 21.6061 85.2916 21.6061H88.3326C88.9408 21.6061 89.4273 21.1212 89.4273 20.5152V5.27273H93.3198C93.928 5.27273 94.4145 4.78788 94.4145 4.21212V1.48485C94.4145 0.87879 93.928 0.39394 93.3198 0.39394Z" fill="#0C0C0C"/>
                    <path d="M111.133 21.6061H114.418C114.996 21.6061 115.391 21.0606 115.178 20.5152L108.245 1.27273C108.062 0.757577 107.545 0.39394 106.967 0.39394H102.74C102.163 0.39394 101.646 0.757577 101.463 1.27273L94.4994 20.5152C94.3169 21.0606 94.7122 21.6061 95.2596 21.6061H98.5743C99.1825 21.6061 99.6994 21.2121 99.8819 20.6667L100.825 17.6364H108.883L109.826 20.6667C110.008 21.2121 110.525 21.6061 111.133 21.6061ZM102.071 13.7273L104.839 4.87879L107.636 13.7273H102.071Z" fill="#0C0C0C"/>
                    <path d="M126.804 17C123.094 17 121.209 14 121.209 11C121.209 8 123.094 5 126.804 5C128.355 5 129.602 5.51515 130.484 6.36364C130.879 6.69697 131.396 6.75758 131.822 6.48485L134.376 4.78788C134.954 4.42424 135.045 3.60606 134.559 3.12121C132.643 1.18182 129.936 0 126.804 0C120.509 0 116.009 4.69697 116.009 11C116.009 17.2727 120.509 21.9697 126.804 21.9697C129.936 21.9697 132.643 20.8182 134.559 18.8788C135.045 18.3636 134.954 17.5758 134.376 17.2121L131.822 15.5152C131.396 15.2424 130.879 15.303 130.484 15.6364C129.602 16.4545 128.355 17 126.804 17Z" fill="#0C0C0C"/>
                    <path d="M154.856 20.3333L147.922 10.6364L154.339 1.66667C154.734 1.12121 154.339 0.39394 153.67 0.39394H150.173C149.716 0.39394 149.321 0.606062 149.047 0.969697L142.965 9.81818V1.48485C142.965 0.87879 142.479 0.39394 141.871 0.39394H138.83C138.221 0.39394 137.735 0.87879 137.735 1.48485V20.5152C137.735 21.1212 138.221 21.6061 138.83 21.6061H141.871C142.479 21.6061 142.965 21.1212 142.965 20.5152V11.9091L149.291 21.0303C149.534 21.3939 149.96 21.6061 150.416 21.6061H154.187C154.856 21.6061 155.221 20.8485 154.856 20.3333Z" fill="#0C0C0C"/>
                    </svg>
                  </Grid>

                </Grid>
                </NavLink>
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
              {!isAuthenticated && (
                <Grid item>
                  <Button
                  variant="contained"
                    color="primary"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </Button>
                </Grid>
              )}
              { user && user.userUuid && <Grid item>
              <Typography>Welcome {user.userUuid}</Typography>
              </Grid>}
              <Grid item>
                <NavLink
                to="/dashboard"
                exact
              >
                  <IconButton color="primary">
                  <DashboardIcon />
                </IconButton>
                  </NavLink>
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
