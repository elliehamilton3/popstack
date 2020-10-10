import {
  // Button,
  Grid,
  TextField,
  // makeStyles,
  // lighten,
} from "@material-ui/core";
import React from "react";
import CircleIcon from "../icons/circle.icon";
// import AddIcon from "@material-ui/icons/Add";
import ResumeSection from "./resumeSection.component";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     justifyContent: "space-between",
//     color: lighten(theme.palette.common.black, 0.4),
//     padding: "10px 16px",
//   },
//   icon: {
//     color: lighten(theme.palette.primary.light, 0.7),
//   },
// }));
export interface IPersonalDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  title: string;
}

const PersonalDetailsSection: React.FunctionComponent<IPersonalDetailsProps> = ({firstName, lastName, email, title, phoneNumber}: IPersonalDetailsProps) => {
  // const classes = useStyles();
  return (
    <ResumeSection
      icon={<CircleIcon />}
      heading="Personal Details"
      subtitle="Summarise your professional career in 2 or 3 sentences."
    > 
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={6}>
            <TextField
              id="firstName"
              name="firstName"
              helperText="First name"
              fullWidth
              variant="filled"
              defaultValue={firstName}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="lastName"
              name="lastName"
              helperText="Last name"
              fullWidth
              variant="filled"
              defaultValue={lastName}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={6}>
            <TextField
              id="email"
              name="email"
              helperText="Email address"
              fullWidth
              variant="filled"
              defaultValue={email}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              helperText="Phone number"
              fullWidth
              variant="filled"
              defaultValue={phoneNumber}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item md={6}>
            <TextField
              id="title"
              name="title"
              helperText="Job title"
              fullWidth
              variant="filled"
              defaultValue={title}
            />
          </Grid>
          {/* <Grid item md={6}>
            <Button
              color="secondary"
              variant="outlined"
              className={classes.button}
              fullWidth
              endIcon={<AddIcon className={classes.icon} />}
            >
              Add custom field
            </Button>
          </Grid> */}
        </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default PersonalDetailsSection;
