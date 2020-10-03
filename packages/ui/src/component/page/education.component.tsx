import {
  Grid,
  TextField,
  makeStyles,
  lighten,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ResumeSection from "./resumeSection.component";
import HalfCircleIcon from "../icons/halfCircle.icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: lighten(theme.palette.primary.light, 0.7),
  },
  closedAccordion: {
    border: lighten("#0057FF", 0.7),
    borderStyle: "dashed",
    borderWidth: "1px",
  },
}));

const EducationSection: React.FunctionComponent = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
      icon={<HalfCircleIcon />}
      heading="Education"
      subtitle="If it’s relevant to your work, you can choose to include
    any recent educational achievements and the dates here."
    >
      <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2">BA (Hons) Fine Art</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Central Saint Martins, London</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>2018 - 2020</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item sm={12}>
                <TextField
                  id="filled-basic"
                  name="institution"
                  helperText="Institution"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="filled-basic1"
                  name="qualification"
                  helperText="Qualification"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-basic1"
                  name="startDate"
                  helperText="Start date"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-basic1"
                  name="endDate"
                  helperText="End date"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <FormControlLabel
                  control={
                    <Checkbox checked={true} name="checkedA" color="primary" />
                  }
                  label="Currently studying"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="filled-basic1"
                  name="location"
                  helperText="Location"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="description"
                  fullWidth
                  helperText="Description"
                  id="filled-textarea"
                  multiline
                  variant="filled"
                  rows={3}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion
          expanded={expanded}
          className={`${!expanded && classes.closedAccordion}`}
          onChange={() => setExpanded(!expanded)}
        >
          <AccordionSummary
            expandIcon={
              expanded ? (
                <RemoveIcon className={classes.icon} />
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2">Add Education</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item sm={12}>
                <TextField
                  id="filled-basic"
                  name="institution"
                  helperText="Institution"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="filled-basic1"
                  name="qualification"
                  helperText="Qualification"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-basic1"
                  name="startDate"
                  helperText="Start date"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <TextField
                  id="filled-basic1"
                  name="endDate"
                  helperText="End date"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={4}>
                <FormControlLabel
                  control={
                    <Checkbox checked={true} name="checkedA" color="primary" />
                  }
                  label="Currently studying"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="filled-basic1"
                  name="location"
                  helperText="Location"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  name="description"
                  fullWidth
                  helperText="Description"
                  id="filled-textarea"
                  multiline
                  variant="filled"
                  rows={3}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </ResumeSection>
  );
};

export default EducationSection;
