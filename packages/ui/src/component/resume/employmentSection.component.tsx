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
import { Employment } from "../../interface/resume.interface";
import EmploymentForm from "./employment.component";
import moment from "moment";

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

export interface IEmploymentSectionProps {
  employment?: Employment[]
}

const EmploymentSection: React.FunctionComponent<IEmploymentSectionProps> = ({employment}: IEmploymentSectionProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
      icon={<HalfCircleIcon />}
      heading="Employment history"
      subtitle="Include your last 10 years of relevant experience and
      dates in this section. List your most recent position
      first."
    >
      <Grid container spacing={2}>
      {employment && employment.map((job) => <Grid item>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
      
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2">{job.title} at {job.company}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{moment(job.dateFrom).format("MMMM YYYY")} - {moment(job.dateTo).format("MMMM YYYY")}</Typography>
                  </Grid>
                </Grid>
            
          </AccordionSummary>
          <EmploymentForm job={job}/>
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
                    <Typography variant="body2">Add employment history</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <EmploymentForm job={{company: "", title: "", location: "", description: "", dateFrom: null, dateTo: null}}/>
        </Accordion>
      </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default EmploymentSection;