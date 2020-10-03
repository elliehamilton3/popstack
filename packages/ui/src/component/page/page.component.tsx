import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Box,
  makeStyles,
  lighten,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import apiFetch from "../../service/apiFetch.service";
import CircleIcon from "../icons/circle.icon";
import ParallelogramIcon from "../icons/parallelogram.icon";
import TeardropIcon from "../icons/teardrop.icon";
import HalfCircleIcon from "../icons/halfCircle.icon";
import SquareIcon from "../icons/square.icon";
import RectangleIcon from "../icons/rectangle.icon";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RemoveIcon from "@material-ui/icons/Remove";
import { generatePdfDocument } from "./pdfDocument.component";
import { getFormValues } from "../../helper/getFormValues";
import { Resume } from "../../interface/resume.interface";
import ResumeSection from "./resumeSection.component";
import ResumePreview from "./resumePreview.component";

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "space-between",
    color: lighten(theme.palette.common.black, 0.4),
    padding: "10px 16px",
  },
  icon: {
    color: lighten(theme.palette.primary.light, 0.7),
  },
  closedAccordion: {
    border: lighten("#0057FF", 0.7),
    borderStyle: "dashed",
    borderWidth: "1px",
  },
}));

export const Page1: React.FunctionComponent = () => {
  const [resume, setResume] = useState<Resume | undefined>(undefined);
  const classes = useStyles();
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    apiFetch("/resume/0", "GET").then((json) => {
      setResume(json as Resume);
    });
  }, []);

  const updateResume = () => {
    const form = formRef.current as HTMLFormElement;
    const formData = getFormValues(form);
    apiFetch("/resume/0", "PATCH", formData).then((json) => {
      setResume(json as Resume);
    });
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <ThemeProvider>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ResumePreview resume={resume} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={3} pt={4}>
            <Grid container direction="column">
              <form ref={formRef} noValidate autoComplete="off">
                <Box pb={4}>
                  <Grid item>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Typography variant="h1">Your Resumé</Typography>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          disabled={!resume}
                          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          onClick={() => generatePdfDocument(resume!)}
                        >
                          Download
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          onClick={() => updateResume()}
                        >
                          Update
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <ResumeSection
                  icon={<CircleIcon />}
                  heading="Personal Details"
                  subtitle="Summarise your professional career in 2 or 3 sentences."
                >
                  <Grid item>
                    <Grid container spacing={2} alignItems="flex-end">
                      <Grid item sm={6}>
                        <TextField
                          id="filled-basic"
                          name="firstName"
                          helperText="First name"
                          fullWidth
                          variant="filled"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <TextField
                          id="filled-basic1"
                          name="lastName"
                          helperText="Last name"
                          fullWidth
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} alignItems="flex-end">
                      <Grid item sm={6}>
                        <TextField
                          id="filled-basic2"
                          name="email"
                          helperText="Email address"
                          fullWidth
                          variant="filled"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <TextField
                          id="filled-basic3"
                          name="phoneNumber"
                          type="number"
                          helperText="Phone number"
                          fullWidth
                          variant="filled"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2} alignItems="flex-end">
                      <Grid item sm={6}>
                        <TextField
                          id="filled-basic4"
                          name="title"
                          helperText="Job title"
                          fullWidth
                          variant="filled"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <Button
                          color="secondary"
                          variant="outlined"
                          className={classes.button}
                          fullWidth
                          endIcon={<AddIcon className={classes.icon} />}
                        >
                          Add custom field
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </ResumeSection>

                <ResumeSection
                  icon={<ParallelogramIcon />}
                  heading="Describe you and your work"
                  subtitle="Summarise your professional career in 2 or 3 sentences."
                >
                  <TextField
                    name="bio"
                    fullWidth
                    id="filled-textarea"
                    multiline
                    variant="filled"
                    rows={4}
                  />
                </ResumeSection>

                <ResumeSection
                  icon={<TeardropIcon />}
                  heading="Employment history"
                  subtitle="Include your last 10 years of relevant experience and
                  dates in this section. List your most recent position
                  first."
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    className={classes.button}
                    fullWidth
                    endIcon={<AddIcon className={classes.icon} />}
                  >
                    Add employment history
                  </Button>
                </ResumeSection>

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
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid container direction="column">
                              <Grid item>
                                <Typography variant="body2">
                                  BA (Hons) Fine Art
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography>
                                  Central Saint Martins, London
                                </Typography>
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
                                <Checkbox
                                  checked={true}
                                  name="checkedA"
                                  color="primary"
                                />
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
                        <Grid
                          container
                          justify="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid container direction="column">
                              <Grid item>
                                <Typography variant="body2">
                                  Add Education
                                </Typography>
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
                                <Checkbox
                                  checked={true}
                                  name="checkedA"
                                  color="primary"
                                />
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

                <ResumeSection
                  icon={<RectangleIcon />}
                  heading="Websites &amp; social media links"
                  subtitle="Include a link to your personal website or portfolio,
                  Github repository, LinkedIn, or anything you might want
                  potential employers to see."
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    className={classes.button}
                    fullWidth
                    endIcon={<AddIcon className={classes.icon} />}
                  >
                    Add website or link
                  </Button>
                </ResumeSection>

                <ResumeSection
                  icon={<SquareIcon />}
                  heading="Skills"
                  subtitle="Add any skills you have that you want to highlight."
                >
                  <Button
                    color="secondary"
                    variant="outlined"
                    className={classes.button}
                    fullWidth
                    endIcon={<AddIcon className={classes.icon} />}
                  >
                    Add a skill
                  </Button>
                </ResumeSection>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Page1;
