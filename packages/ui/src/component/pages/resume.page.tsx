import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Box,
  makeStyles,
  lighten,
  Switch
} from "@material-ui/core";
import Navbar from "../navbar/navbar.component";
import { ThemeProvider } from "../../styles/theme";
import apiFetch from "../../service/apiFetch.service";
import AddIcon from "@material-ui/icons/Add";
import ParallelogramIcon from "../icons/parallelogram.icon";
import SquareIcon from "../icons/square.icon";
import RectangleIcon from "../icons/rectangle.icon";
import { getFormValues } from "../../helper/getFormValues";
import { Resume } from "../../interface/resume.interface";
import ResumeSection from "../resume/resumeSection.component";
import ResumePreview from "../resume/resumePreview.component";
import PersonalDetailsSection from "../resume/personalDetails.component";
import EducationSection from "../resume/educationSection.component";
import EmploymentSection from "../resume/employmentSection.component";

const useStyles = makeStyles((theme) => ({
  button: {
    justifyContent: "space-between",
    color: lighten(theme.palette.common.black, 0.4),
    padding: "10px 16px",
  },
  icon: {
    color: lighten(theme.palette.primary.light, 0.7),
  },
}));

const ResumePage: React.FunctionComponent = () => {
  const [resume, setResume] = useState<Resume | undefined>(undefined);
  const [resumeStyle, setResumeStyle] = useState<1 | 2>(1);
  const [checked, setChecked] = useState(false);
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
    console.log(formData)
    apiFetch("/resume/0", "PATCH", formData).then((json) => {
      setResume(json as Resume);
    });
  };
  const handleChange = () => {
    setChecked(!checked);
    setResumeStyle(!checked ? 2 : 1)
  };

  return (
    <ThemeProvider>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={6}>
          <ResumePreview resume={resume} resumeStyle={resumeStyle}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={3} pt={12}>
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
                          onClick={() => updateResume()}
                        >
                          Update
                        </Button>
                      </Grid>
                      <Grid item>
                      <Switch
                        checked={checked}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>

                {resume && 
                <PersonalDetailsSection 
                firstName={resume.user.firstName} 
                lastName={resume.user.lastName} 
                phoneNumber={resume.user.phoneNumber} 
                email={resume.user.email} 
                title={resume.resume.title}/>}

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
                    defaultValue={resume && resume.resume.bio}
                  />
                </ResumeSection>

                <EmploymentSection employment={resume?.jobs}/>

                <EducationSection educations={resume?.educations}/>
                
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

export default ResumePage;
