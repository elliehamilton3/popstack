import { useEffect, useState } from "react";
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
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/navbar/navbar.component";
// import apiFetch from "../../service/apiFetch.service";
import AddIcon from "@material-ui/icons/Add";
import ParallelogramIcon from "../components/icons/parallelogram.icon";
import SquareIcon from "../components/icons/square.icon";
import RectangleIcon from "../components/icons/rectangle.icon";
import { getFormValues } from "../helper/getFormValues";
import { Resume as ResumeInterface } from "../interface/resume.interface";
import ResumeSection from "../components/resume/resumeSection.component";
import ResumePreview from "../components/resume/resumePreview.component";
import PersonalDetailsSection from "../components/resume/personalDetails.component";
import EducationSection from "../components/resume/educationSection.component";
import EmploymentSection from "../components/resume/employmentSection.component";

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

export default function Resume() {

  const [resume, setResume] = useState<ResumeInterface | undefined>(undefined);
  const [resumeStyle, setResumeStyle] = useState<1 | 2>(1);
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { getAccessTokenSilently } = useAuth0();


  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently();
  
        const response = await fetch(
          `http://localhost:3000/v1/resume/0`,
          {
            headers: {
              Accept: "application/json",
             "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const responseData = await response.json();
        if(responseData.statusCode === 404) {
          const token = await getAccessTokenSilently();
  
        const response1 = await fetch(
          `http://localhost:3000/v1/resume`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
             "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const responseData1 = await response1.json();
        setResume(responseData1 as ResumeInterface);
        } else {

        setResume(responseData as ResumeInterface);
        }
  
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [getAccessTokenSilently]);

  const updateResume = async () => {
    const form = formRef.current as HTMLFormElement;
    const formData = getFormValues(form);
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `http://localhost:3000/v1/resume/0`,
        {
          method: "PATCH",
          body: JSON.stringify(formData),
          headers: {
            Accept: "application/json",
           "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();
      setResume(responseData as ResumeInterface);

    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = () => {
    setChecked(!checked);
    setResumeStyle(!checked ? 2 : 1)
  };

    return (
        <>
        <Navbar />
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <ResumePreview resume={resume} resumeStyle={resumeStyle}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box p={3} pt={12}>
            <Grid container direction="column">
              <form ref={formRef} noValidate autoComplete="off">
                <Box pb={4}>
                  <Grid item>
                    <Grid container justify="space-between" alignItems="center">
                      <Grid item>
                        <Typography variant="h2">Your Resumé</Typography>
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
                onChange={updateResume}
                firstName={resume && resume.user && resume.user.firstName} 
                lastName={resume && resume.user && resume.user.lastName} 
                phoneNumber={resume && resume.user && resume.user.phoneNumber} 
                email={resume && resume.user && resume.user.email} 
                title={resume && resume.resume && resume.resume.title}/>}

                <ResumeSection
                  icon={<ParallelogramIcon fontSize="large" />}
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
                    defaultValue={resume && resume.resume && resume.resume.bio}
                    onChange={() => updateResume()}
                  />
                </ResumeSection>

                <EmploymentSection employment={resume?.jobs} onChange={updateResume}/>

                <EducationSection educations={resume?.educations} onChange={updateResume}/>
                
                <ResumeSection
                  icon={<RectangleIcon fontSize="large" />}
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
                  icon={<SquareIcon fontSize="large" />}
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
      </>
    )

}