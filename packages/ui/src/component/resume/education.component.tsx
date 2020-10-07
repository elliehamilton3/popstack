import { AccordionDetails, Grid, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";
import { Education } from "../../interface/resume.interface";

export interface IEducationFormProps {
  education: Education
}

const EducationForm: React.FunctionComponent<IEducationFormProps> = ({
  education: {place, info, yearFrom, yearTo}
}: IEducationFormProps) => {
  return (
    <AccordionDetails>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item sm={12}>
        <TextField
          id="institution"
          name="institution"
          helperText="Institution"
          fullWidth
          variant="filled"
          defaultValue={place}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          id="qualification"
          name="qualification"
          helperText="Qualification"
          fullWidth
          variant="filled"
          defaultValue={info}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          id="startDate"
          name="startDate"
          helperText="Start date"
          fullWidth
          variant="filled"
          type="number"
          defaultValue={yearFrom !== 0 && yearFrom.toString()}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          id="endDate"
          name="endDate"
          helperText="End date"
          fullWidth
          variant="filled"
          type="number"
          defaultValue={yearTo !== 0 &&yearTo.toString()}
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
          id="location"
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
          id="description"
          multiline
          variant="filled"
          rows={3}
        />
      </Grid>
    </Grid>
  </AccordionDetails>
  );
};

export default EducationForm;
