import {
  Grid,
  makeStyles,
  lighten,
  Accordion,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ResumeSection from "./resumeSection.component";
import HalfCircleIcon from "../icons/halfCircle.icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { Education } from "../../interface/resume.interface";
import EducationForm from "./education.component";

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

export interface IEducationSectionProps {
  educations?: Education[]
}

const EducationSection: React.FunctionComponent<IEducationSectionProps> = ({educations}: IEducationSectionProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
      icon={<HalfCircleIcon />}
      heading="Education"
      subtitle="If it’s relevant to your work, you can choose to include
    any recent educational achievements and the dates here."
    >
      <Grid container spacing={2}>
      {educations && educations.map((education) => <Grid item>
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
                    <Typography variant="body2">{education.info}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{education.place}, London</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Typography>{education.yearFrom} - {education.yearTo}</Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <EducationForm education={education}/>
        </Accordion>
      </Grid>)}
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
          <EducationForm education={{info: "", place: "", yearFrom: 0, yearTo: 0}}/>
        </Accordion>
      </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default EducationSection;
