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
  educations?: Education[];
  onChange: () => void;
}

const EducationSection: React.FunctionComponent<IEducationSectionProps> = ({educations, onChange}: IEducationSectionProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
      icon={<HalfCircleIcon fontSize="large"/>}
      heading="Education"
      subtitle="If it’s relevant to your work, you can choose to include
    any recent educational achievements and the dates here."
    >
      
      <Grid container spacing={2}>
      {educations && educations.map((education, i) => 
      <Grid item key={i}>
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
          <EducationForm education={education} number={i} onChange={onChange}/>
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
                    <Typography variant="body2">Add education</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <EducationForm education={{info: "", place: "", yearFrom: 0, yearTo: 0}} number={educations ? educations.length : 1} onChange={onChange}/>
        </Accordion>
      </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default EducationSection;
