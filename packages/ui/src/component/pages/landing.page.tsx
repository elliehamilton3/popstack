import { makeStyles, Box, Grid, Typography, Button, Paper } from "@material-ui/core";
import React from "react";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import { NavLink } from "react-router-dom";
import {Animation} from '../animation/animation.component'
const useStyles = makeStyles((theme) => ({
  section1: {
    color: theme.palette.common.white,
  },
  section2: {
    backgroundColor: "#0057FF",
    color: theme.palette.common.white,
  },
  innerBox: {
    backgroundColor: "#0046CF",
  },
  resumePaper: {
    height: "40vw", 
    position: "relative",
    top: "-100px",
    borderRadius: "20px"
  },
  section3: {
    backgroundColor: "#FFB7D5"
  },
  section4: {
    backgroundColor: "#FFD84C"
  },
  box: {
    position: "relative",
    top: "-476px",
    pointerEvents: "none"
  },
  content: {
    zIndex: 2,
    pointerEvents: "all"
  },
  button: {
    backgroundColor: theme.palette.common.white
  },
  link: {
    textDecoration: "none",
  }
}));

export const Page1: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <Navbar />
      <Animation >
        
        </Animation>
        <Box className={classes.box}> 
        <Box className={classes.section1} pt={15} pb={21}>
          <Grid container className={classes.content} spacing={3} alignItems="center" direction="column">
          <Grid item className={classes.content}>
            <Typography variant="h1">Make your resumé pop.</Typography>
          </Grid>
          <Grid item style={{maxWidth: "370px"}} className={classes.content}>
            <Typography variant="h3" align="center">Beautiful resumes, designed for professionals like you.</Typography>
          </Grid>
          <Grid item>
          <NavLink
            to="/resume"
            exact
            className={classes.link}
          >
            <Button variant="contained" className={classes.button}>Create my resume</Button>
          </NavLink>
          </Grid>
        </Grid>
        </Box>
      {/* 
       <svg  viewBox="0 0 1175 2061" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.9" x="473" y="311" width="711" height="46" rx="4" fill="#0057FF"/>
      <path opacity="0.9" d="M801.389 298.347C799.767 297.778 798.689 296.236 798.713 294.517L800.054 197.559C800.092 194.826 802.798 192.935 805.377 193.84L896.882 225.925C898.505 226.494 899.582 228.036 899.558 229.755L898.217 326.713C898.18 329.445 895.473 331.336 892.894 330.432L801.389 298.347Z" fill="#26C58C"/>
      <path opacity="0.9" d="M316.948 352.989C317.005 355.198 315.253 357 313.044 357C297.443 357 237.53 357 166 357C94.4702 357 34.557 357 18.9563 357C16.7472 357 14.9947 355.198 15.0522 352.989C17.1785 271.448 83.9461 206 166 206C248.054 206 314.822 271.448 316.948 352.989Z" fill="#0057FF"/>
      <path opacity="0.9" d="M479.87 124.661C480.747 122.633 483.095 121.735 485.099 122.664C499.253 129.226 553.609 154.425 618.504 184.51C683.399 214.595 737.756 239.794 751.909 246.355C753.914 247.284 754.746 249.657 753.764 251.636C717.54 324.72 629.438 356.016 554.995 321.504C480.551 286.993 447.503 199.533 479.87 124.661Z" fill="#FF8C4C"/>
      <path opacity="0.9" d="M116.413 1369.99C115.549 1372.02 113.207 1372.94 111.197 1372.02C97.0011 1365.55 42.4848 1340.7 -22.6017 1311.03C-87.6882 1281.36 -142.205 1256.51 -156.4 1250.04C-158.41 1249.12 -159.257 1246.76 -158.289 1244.77C-122.532 1171.46 -34.6326 1139.6 40.03 1173.63C114.693 1207.67 148.299 1294.91 116.413 1369.99Z" fill="#FF8C4C"/>
      <rect opacity="0.9" x="243" y="83" width="274" height="274" rx="4" fill="#62CFF1"/>
      <path opacity="0.9" d="M1060.64 150.967C1061.96 148.185 1065.8 147.876 1067.54 150.411L1178.69 311.513C1180.44 314.047 1178.79 317.524 1175.72 317.771L980.627 333.474C977.557 333.721 975.372 330.553 976.692 327.772L1060.64 150.967Z" fill="#26C58C"/>
      <rect opacity="0.9" x="90" y="196.237" width="334" height="79" rx="4" transform="rotate(-29.0609 90 196.237)" fill="#FF8C4C"/>
      <circle opacity="0.9" cx="746" cy="226" r="91" fill="#FFB7D5"/>
      <path opacity="0.9" d="M97.7152 90.546C117.938 63.2953 198.314 45.4906 217.66 41.5453C219.937 41.0807 222.072 42.665 222.288 44.9798C224.117 64.639 230.363 146.726 210.14 173.976C187.101 205.022 143.258 211.512 112.212 188.474C81.1671 165.435 74.6765 121.591 97.7152 90.546Z" fill="#FFB7D5"/>
      <circle opacity="0.9" cx="517" cy="287" r="70" fill="#FFD84C"/>
      <path opacity="0.9" d="M994.302 279.389C996.072 278.068 998.6 278.427 999.706 280.339C1008.22 295.064 1004.55 314.162 990.582 324.582C976.614 335.003 957.261 333.083 945.574 320.722C944.056 319.117 944.432 316.592 946.203 315.271C950.791 311.848 959.84 305.098 970.252 297.33C980.665 289.562 989.713 282.812 994.302 279.389Z" fill="#FFD84C"/>
      <path opacity="0.9" d="M1016.72 1148.45C1016.34 1146.77 1017.08 1145.04 1018.55 1144.15L1101.47 1093.88C1103.81 1092.47 1106.84 1093.76 1107.44 1096.42L1128.75 1191.02C1129.13 1192.7 1128.39 1194.43 1126.92 1195.32L1044 1245.59C1041.66 1247 1038.62 1245.71 1038.02 1243.04L1016.72 1148.45Z" fill="#26C58C"/>
      <rect opacity="0.9" x="992" y="591" width="274" height="274" rx="4" fill="#62CFF1"/>
      <circle opacity="0.9" cx="232.562" cy="784.562" r="91" transform="rotate(18.8919 232.562 784.562)" fill="#FFB7D5"/>
      <path opacity="0.9" d="M41.2322 601.868C29.6758 590.312 26.3512 552.399 25.5454 539.59C25.3994 537.27 27.2701 535.399 29.5902 535.545C42.3996 536.351 80.3117 539.676 91.8681 551.232C105.851 565.215 105.851 587.885 91.8681 601.868C77.8854 615.851 55.2149 615.851 41.2322 601.868Z" fill="#FFB7D5"/>
      <circle opacity="0.9" cx="350.786" cy="780.357" r="70" transform="rotate(18.8919 350.786 780.357)" fill="#FFD84C"/>
      <circle opacity="0.9" cx="1180.89" cy="1558.89" r="70" transform="rotate(18.8919 1180.89 1558.89)" fill="#62CFF1"/>
      <path opacity="0.9" d="M1076.95 1997.32C1062.2 1966.76 1083.73 1887.3 1089.22 1868.34C1089.87 1866.1 1092.26 1864.95 1094.41 1865.83C1112.67 1873.34 1188.28 1905.91 1203.03 1936.47C1219.83 1971.28 1205.23 2013.13 1170.42 2029.94C1135.6 2046.74 1093.75 2032.14 1076.95 1997.32Z" fill="#FFB7D5"/>
      </svg> 
  */}
      <Box className={classes.section2} p={5}>
      <Grid container spacing={3} className={classes.content}>
        <Grid item sm={1}>
          <Paper className={classes.resumePaper} style={{marginLeft: "-40px", borderRadius: "0 20px 20px 0"}}/>
        </Grid>
        <Grid item sm={4}>
        <Paper className={classes.resumePaper}/>
          </Grid>
        <Grid item sm={6}>
        <Box py={7} px={11} className={classes.innerBox} borderRadius="4px">
        <Grid container direction="column" spacing={3}>
          <Grid item><Typography variant="h3">Beautiful resumes</Typography></Grid>
          <Grid item><Typography variant="body1">Our professionally designed resume templates take the hard work out of getting you and your work ready to be noticed. Customisable, easy to use and you can instantly export to PDF.</Typography></Grid>
          </Grid>
           </Box>
        </Grid>
        <Grid item sm={1}>
          <Paper className={classes.resumePaper} style={{marginRight: "-40px",  borderRadius: "20px 0 0 20px"}}/>
        </Grid>
        </Grid>
      </Box>
       <Box className={classes.section1} style={{backgroundColor: "#0C0C0C"}} p={5}>
      <Grid container spacing={3} alignItems="center" className={classes.content}>
     
        <Grid item sm={6}>
        <Box py={7} px={11} >
        <Grid container direction="column" spacing={3}>
          <Grid item><Typography variant="h3">Designed for professionals</Typography></Grid>
          <Grid item><Typography variant="body1">Whether you're a copywriter, an engineer or a product designer, we've got all the bells and whistles to help you be successful with your job hunt. Add any sections that are relevant to your work, and remove anything that isn’t.</Typography></Grid>
          </Grid>
           </Box>
        </Grid>
        <Grid item sm={4}>
        <svg viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="137" cy="137" r="137" fill="white"/>
          </svg>

        </Grid>
      </Grid>
      </Box>
      <Box className={classes.section3} p={5} >
      <Grid container spacing={3} className={classes.content}>
        <Grid item sm={1}/>
        <Grid item sm={4}>
        <svg viewBox="0 0 244 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="122" cy="73" rx="122" ry="73" fill="#0C0C0C"/>
        </svg>

        </Grid>
        <Grid item sm={6}>
        <Box py={7} px={11} >
        <Grid container direction="column" spacing={3}>
          <Grid item><Typography variant="h3">Create multiple resumes and cover letters</Typography></Grid>
          <Grid item><Typography variant="body1">Applying for a handful of jobs at the same time? Create as many CV's and cover letters as you need.</Typography></Grid>
          </Grid>
         </Box>
        </Grid>
      </Grid>
      </Box>
      <Box className={classes.section4} p={5}>
      <Box py={7} px={11} >
      <Grid container spacing={3} className={classes.content}>

        <Grid item sm={5}>
  
          <Grid container direction="column" spacing={3}>
          <Grid item><Typography variant="h3">Custom fields</Typography></Grid>
          <Grid item><Typography variant="body1">With the ability to add custom fields and rename any of the sections, you have complete control over your resume.</Typography></Grid>
          </Grid>

        </Grid>
        <Grid item sm={1}/>

        <Grid item sm={5}>

          <Grid container direction="column" spacing={3}>
          <Grid item><Typography variant="h3">Super easy to update</Typography></Grid>
          <Grid item><Typography variant="body1">Time for a change? All you need to do is log back in and update your info before you look for the next job – it's that easy.</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>
      </Box>
      </Box> 
      <Box className={classes.section1} style={{backgroundColor: "#0C0C0C"}} height="300px" /> 
      </Box>
    </ThemeProvider> 
  );
};

export default Page1;
