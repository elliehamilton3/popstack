import { AccordionDetails, Grid, TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Education } from "../../interface/resume.interface";

export interface IEducationFormProps {
  education: Education;
  number: number;
  onChange: () => void;
}

const EducationForm: React.FunctionComponent<IEducationFormProps> = ({
  education: {place, info, yearFrom, yearTo}, number, onChange
}: IEducationFormProps) => {
  return (
    <AccordionDetails>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item md={12}>
        <TextField
          id={`educations-place-${number}`}
          name={`educations-place-${number}`}
          helperText="Institution"
          fullWidth
          variant="filled"
          defaultValue={place}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          id={`educations-info-${number}`}
          name={`educations-info-${number}`}
          helperText="Qualification"
          fullWidth
          variant="filled"
          defaultValue={info}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          id={`educations-yearFrom-${number}`}
          name={`educations-yearFrom-${number}`}
          helperText="Start date"
          fullWidth
          variant="filled"
          type="number"
          defaultValue={yearFrom !== 0 && yearFrom.toString()}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          id={`educations-yearTo-${number}`}
          name={`educations-yearTo-${number}`}
          helperText="End date"
          fullWidth
          variant="filled"
          type="number"
          defaultValue={yearTo !== 0 &&yearTo.toString()}
        />
      </Grid>
      <Grid item md={4}>
        <FormControlLabel
          control={
            <Checkbox checked={true} name="checkedA" color="primary" />
          }
          label="Currently studying"
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          id={`educations-location-${number}`}
          name={`educations-location-${number}`}
          helperText="Location"
          fullWidth
          variant="filled"
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          name={`educations-description-${number}`}
          fullWidth
          helperText="Description"
          id={`educations-description-${number}`}
          multiline
          variant="filled"
          rows={3}
        />
      </Grid>
      <Grid item container justify="flex-end">
      <Grid item >
        <Button
        variant="outlined"
        onClick={() => onChange()}
          
          
        >Add to my resume</Button>
      </Grid>
      </Grid>
    </Grid>
  </AccordionDetails>
  );
};

export default EducationForm;