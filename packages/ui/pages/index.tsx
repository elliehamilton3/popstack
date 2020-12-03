import { makeStyles, Box, Grid, Typography, Button, Hidden } from "@material-ui/core";
import Image1 from '../components/icons/image1';
// import Image2 from "../components/icons/image2";
import Image3 from "../components/icons/image3";
import Image4 from "../components/icons/image4";
import Navbar from "../components/navbar/navbar.component";
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/footer/footer.component';

const useStyles = makeStyles((theme) => ({
  section1Content: {
    "@media (min-width: 600px)": {
    maxWidth: "490px"},
    "@media (max-width: 600px)": {
      alignItems: "center",
      textAlign: "center"
    }
  },
  section1: {
    "@media (max-width: 600px)": {
      padding: "72px 24px 24px 24px"
    }
  },
  section2: {
    backgroundColor: "#0C0C0C",
    color: theme.palette.common.white,
  },
  section3: {
    "@media (max-width: 600px)": {
      padding: "48px 32px"
    }
  },
  section5: {
    "@media (max-width: 600px)": {
      padding: "48px 32px"
    }
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
  section4: {
    backgroundColor: "#0057FF",
    color: "#fff",
    "@media (max-width: 600px)": {
      padding: "48px 32px"
    }
  },
  button: {
    backgroundColor: "#0C0C0C",
    color: theme.palette.common.white,
  },
  link: {
    textDecoration: "none",
  },
  image: {height: "100%", width: "100%"},
  section3Content:{
    "@media (min-width: 600px)": {
      maxWidth: "350px"
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
    <Navbar />
    <Box p={8} pt={15} className={classes.section1}>
      <Grid container spacing={4} alignItems="center">
      <Grid item sm={6} xs={12}>
        <Image1 className={classes.image}/>
      </Grid>
        <Grid item sm={6} xs={12}>
      <Grid container spacing={4} direction="column" className={classes.section1Content}>
      <Grid item >
        <Typography variant="h1">Make your resumé pop.</Typography>
      </Grid>
      <Grid item >
        <Typography variant="h3">Beautiful resumes, designed for professionals like you.</Typography>
      </Grid>
      <Grid item>
      <Link href="/resume">
      
        <Button variant="contained" className={classes.button}>Create my resume</Button>
      </Link>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
    </Box>
  <Box className={classes.section2} p={8} >
  <Grid container spacing={8} alignItems="center" >
    <Grid item sm={6} xs={12}>
    <Grid container spacing={3} direction="column">
      <Grid item >
        <Typography variant="h2">Our resumes are beautiful</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Our professionally designed resume templates take the hard work out of getting you and your work ready to be noticed.</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Customisable, easy to use and you can instantly export to PDF.</Typography>
      </Grid>
    </Grid>
    </Grid>
    <Grid item sm={6} xs={12}>
      <Link href="/resume">
        <Button variant="contained">See all of our templates</Button>
        </Link>
    </Grid>

  </Grid>
  {/* <AutoRotatingCarousel
// label='Get started'
open={true}
// onClose={() => setState({ open: false })}
// onStart={() => setState({ open: false })}
// style={{ position: 'absolute' }}
>
<Resume1 style={{height: "335px", width:"235px"}}/>
<Resume1 style={{height: "335px", width:"235px"}}/>
<Resume1 style={{height: "335px", width:"235px"}}/>

</AutoRotatingCarousel> */}
  <Grid container justify="center">
  <Grid item>
      <Link href="/resume">
        <Button variant="contained">Create my resume</Button>
        </Link>
    </Grid>
    </Grid>
  </Box>
  <Box p={8} className={classes.section3}>
  <Grid container spacing={3} alignItems="center" >
  <Grid item sm={6} xs={12}>
      <Image3 className={classes.image}/>
    </Grid>
    <Grid item sm={6} xs={12}>
    <Grid container spacing={3} direction="column" className={classes.section3Content}> 
      <Grid item >
        <Typography variant="h2">Designed for professionals</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Whether you're a copywriter, an engineer or a product designer, we've got all the bells and whistles to help you be successful with your job hunt.</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Add custom sections to your CV that are relevant to your work, and remove anything that isn’t.</Typography>
      </Grid>
    </Grid>
    </Grid>

  </Grid>
  </Box>
  <Box p={8} py={12} className={classes.section4}>
  <Grid container alignItems="center" justify="center">
    <Grid item sm={5} xs={12} className={classes.section3Content}>
    <Grid container spacing={3} direction="column" >
      <Grid item >
        <Typography variant="h2">Create multiple resumes and cover letters</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Applying for a handful of jobs at the same time? Create as many CV's and cover letters as you need.</Typography>
      </Grid>
    </Grid>
    </Grid>
    <Grid item sm={2} />
    <Grid item sm={5} xs={12}className={classes.section3Content} >
    <Image
        src="/resumes.svg"
        alt="Resume stack"
        width={"350px"}
        height={"350px"}
      />
    </Grid>

  </Grid>
  </Box>
  <Box p={8} className={classes.section5}>
  <Grid container spacing={3} >
    <Grid item sm={4} xs={12}>
    <Grid container spacing={3} direction="column">
    <Grid item >
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24.5" cy="24.5" r="24.5" fill="#0C0C0C"/>
    </svg>

      </Grid>
      <Grid item >
        <Typography variant="h3">Custom fields</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">With the ability to add custom fields and rename any of the sections, you have complete control over your resume.</Typography>
      </Grid>
    </Grid>
    </Grid>
    <Grid item sm={4} xs={12}>
    <Grid container spacing={3} direction="column">
    <Grid item >
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24.5" cy="24.5" r="24.5" fill="#0C0C0C"/>
    </svg>

      </Grid>
      <Grid item >
        <Typography variant="h3">Super easy to update</Typography>
      </Grid>
      <Grid item >
        <Typography variant="body1">Time for a change? All you need to do is log back in and update your info before you look for the next job – it's that easy.</Typography>
      </Grid>
    </Grid>
    </Grid>
    <Hidden xsDown><Grid item sm={4} xs={12}>
    <Image4 className={classes.image}/>
    </Grid>
    </Hidden>
  </Grid>
  </Box>
  <Footer /> 
  </>
  );
}
