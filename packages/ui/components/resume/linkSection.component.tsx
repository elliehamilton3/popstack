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
import RectangleIcon from "../icons/rectangle.icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { Link } from "../../interface/resume.interface";
import LinkForm from "./link.component";

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

export interface ILinkSectionProps {
  links?: Link[];
  onChange: () => void;
}

const LinkSection: React.FunctionComponent<ILinkSectionProps> = ({links, onChange}: ILinkSectionProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <ResumeSection
    icon={<RectangleIcon fontSize="large" />}
    heading="Websites &amp; social media links"
    subtitle="Include a link to your personal website or portfolio,
    Github repository, LinkedIn, or anything you might want
    potential employers to see."
    >
      
      <Grid container spacing={2}>
      {links && links.map((link, i) => 
      <Grid item key={i} xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
               <Grid container direction="column">
                  <Grid item>
                    <Typography variant="subtitle2">{link.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{link.link}</Typography>
                  </Grid>
              </Grid>
   
          </AccordionSummary>
          <LinkForm link={link} number={i} onChange={onChange}/>
        </Accordion>
      </Grid>)}
      <Grid item xs={12}>
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
                    <Typography variant="subtitle2">Add link</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionSummary>
          <LinkForm link={{title: "", link: ""}} number={links ? links.length : 1} onChange={onChange}/>
        </Accordion>
      </Grid>
      </Grid>
    </ResumeSection>
  );
};

export default LinkSection;
