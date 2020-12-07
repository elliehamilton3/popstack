import {
  // Button,
  Grid,
  TextField,
  Typography,
  // makeStyles,
  // lighten,
} from "@material-ui/core";
import React from "react";
import CircleIcon from "../icons/circle.icon";
// import AddIcon from "@material-ui/icons/Add";
import ResumeSection from "./resumeSection.component";
import { Skeleton } from "@material-ui/lab";

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
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  title?: string;
  onChange: () => void;
  loading?: boolean;
}

const PersonalDetailsSection: React.FunctionComponent<IPersonalDetailsProps> = ({firstName, lastName, email, title, phoneNumber, onChange, loading = false}: IPersonalDetailsProps) => {
  // const classes = useStyles();
  const TextFieldSkeleton = <>
  <Typography variant="subtitle1" style={{paddingBottom: "6px"}}><Skeleton width="33%" /></Typography>
  <Skeleton variant="rect" width="100%" height={50} />
  </>
  return (
    <ResumeSection
      loading={loading}
      icon={<CircleIcon fontSize="large" style={{fill: "#FFD84C"}}/>}
      heading="Personal Details"
    > 
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
            {loading ? TextFieldSkeleton :<TextField
              id="firstName"
              name="firstName"
              helperText="First name"
              fullWidth
              variant="filled"
              defaultValue={firstName}
              onChange={() => onChange()}
            />}

          </Grid>
          <Grid item xs={12} sm={6}>
          {loading ? TextFieldSkeleton :
          <TextField
              id="lastName"
              name="lastName"
              helperText="Last name"
              fullWidth
              variant="filled"
              defaultValue={lastName}
              onChange={() => onChange()}
            />
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
          {loading ? TextFieldSkeleton :<TextField
              id="email"
              name="email"
              helperText="Email address"
              fullWidth
              variant="filled"
              defaultValue={email}
              onChange={() => onChange()}
            />}
          </Grid>
          <Grid item xs={12} sm={6}>
            {loading ? TextFieldSkeleton :<TextField
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              helperText="Phone number"
              fullWidth
              variant="filled"
              defaultValue={phoneNumber}
              onChange={() => onChange()}
            />}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={6}>
          {loading ? TextFieldSkeleton :<TextField
              id="title"
              name="title"
              helperText="Job title"
              fullWidth
              variant="filled"
              defaultValue={title}
              onChange={() => onChange()}
            />}
          </Grid>
          {/* <Grid item xs={12} sm={6}>
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
