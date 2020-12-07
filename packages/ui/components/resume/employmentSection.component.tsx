import {
  Grid,
  makeStyles,
  lighten,
  Accordion,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import ResumeSection from "./resumeSection.component";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { Employment } from "../../interface/resume.interface";
import EmploymentForm from "./employment.component";
import moment from "moment";
import TeardropIcon from "../icons/teardrop.icon";

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
  employment?: Employment[];
  onChange: () => void;
}

const EmploymentSection: React.FunctionComponent<IEmploymentSectionProps> = ({employment, onChange}: IEmploymentSectionProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
      icon={<TeardropIcon fontSize="large"/>}
      heading="Employment history"
      subtitle="Include your last 10 years of relevant experience and
      dates in this section. List your most recent position
      first."
    >
      <Grid container spacing={2}>
      {employment && employment.map((job, i) => 
      <Grid item key={i}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
      
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="subtitle2">{job.title} at {job.company}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{moment(job.dateFrom).format("MMMM YYYY")} - {moment(job.dateTo).format("MMMM YYYY")}</Typography>
                  </Grid>
                </Grid>
            
          </AccordionSummary>
          <EmploymentForm job={job} number={i} onChange={onChange}/>
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
                    <Typography variant="subtitle2">Add employment history</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <EmploymentForm job={{company: "", title: "", location: "", description: "", dateFrom: null, dateTo: null}} number={employment ? employment.length : 1} onChange={onChange}/>
        </Accordion>
      </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default EmploymentSection;
