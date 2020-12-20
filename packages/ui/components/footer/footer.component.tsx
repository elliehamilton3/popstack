import { Box, makeStyles, Grid, List, ListItem, ListItemText, ListSubheader, Hidden, Divider,fade, ListItemIcon } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import CircleIcon from "../icons/circle.icon";
import Image6 from "../icons/image6";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#0C0C0C",
    color: "white",
    "& .MuiListSubheader-root": {
      color: "#fff",
    },
    "& .MuiDivider-root":{  
      backgroundColor: fade("#fff", 0.2),
    },
    "@media (max-width: 600px)": {
      padding: "48px 32px"
    }
  },
  image: {
    height: "150px",
    width: "auto"
  },
  link: {
    cursor: "pointer"
  }
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer} px={10} py={6}> 
    <Grid container justify="space-between" alignItems="center">
    <Grid item xs={12} md={8} >
    <Grid container spacing={4}>
    <Grid item xs={12} sm={4}>
      <List subheader={<ListSubheader>Popstack</ListSubheader>}>
      <Divider />
      <ListItem>
        <ListItemText primary="About us" />
      </ListItem>
      <ListItem className={classes.link}>
        <Link href="/pricing" >
            <ListItemText primary="Pricing" />
        </Link>
      </ListItem>
    </List>
    </Grid>
    <Grid item xs={12} sm={4}>
      <List subheader={<ListSubheader>Support</ListSubheader>}>
      <Divider />
      <ListItem>
        <ListItemText primary="FAQ's" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Contact us" />
      </ListItem>
      <ListItem>
        <ListItemText primary="The legal stuff" />
      </ListItem>
    </List>
    </Grid>
    <Grid item xs={12} sm={4}>
      <List subheader={<ListSubheader>Follow us</ListSubheader>}>
      <Divider />
      <Link href="https://twitter.com/popstackco">
      <ListItem className={classes.link}>
      <ListItemIcon>
            <CircleIcon style={{fill: "#62CFF1"}} />
          </ListItemIcon>
        <ListItemText primary="Twitter" />
      </ListItem>
      </Link> 
      <ListItem>
      <ListItemIcon>
            <CircleIcon style={{fill: "#0057FF"}} />
          </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
      <ListItem>
      <ListItemIcon>
            <CircleIcon style={{fill: "#2F80ED"}} />
          </ListItemIcon>
        <ListItemText primary="Facebook" />
      </ListItem>
              <Link href="https://www.instagram.com/popstackco/">
      <ListItem className={classes.link}>
      <ListItemIcon>
            <CircleIcon style={{fill: "#FFD84C"}} />
          </ListItemIcon>
        <ListItemText primary="Instagram" />
      </ListItem>
      </Link>
    </List>
    </Grid> 
    </Grid>
    </Grid>
    <Grid item  >
    <Hidden smDown><Grid item sm={2} >
    <Image6 className={classes.image}/>

    </Grid>
    </Hidden>
    </Grid>
    </Grid>
    </Box>
  );
};

export default Footer;
