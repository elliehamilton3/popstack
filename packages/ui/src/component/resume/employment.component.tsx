import { AccordionDetails, Grid, TextField, FormControlLabel, Checkbox } from "@material-ui/core";
import React from "react";
import { Employment } from "../../interface/resume.interface";

export interface IEmploymentFormProps {
  job: Employment
}

const EmploymentForm: React.FunctionComponent<IEmploymentFormProps> = ({
  job: {company, title, location, description}
}: IEmploymentFormProps) => {
  return (
    <AccordionDetails>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item sm={12}>
        <TextField
          id="title"
          name="title"
          helperText="Job title"
          fullWidth
          variant="filled"
          defaultValue={title}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          id="company"
          name="company"
          helperText="Company"
          fullWidth
          variant="filled"
          defaultValue={company}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          id="dateFrom"
          name="dateFrom"
          helperText="Start date"
          fullWidth
          variant="filled"
          // defaultValue={dateFrom}
        />
      </Grid>
      <Grid item sm={4}>
        <TextField
          id="dateTo"
          name="dateTo"
          helperText="End date"
          fullWidth
          variant="filled"
          // defaultValue={dateTo}
        />
      </Grid>
      <Grid item sm={4}>
        <FormControlLabel
          control={
            <Checkbox checked={true} name="checkedA" color="primary" />
          }
          label="Currently working"
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          id="location"
          name="location"
          helperText="Location"
          fullWidth
          variant="filled"
          defaultValue={location}
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
          defaultValue={description}
        />
      </Grid>
    </Grid>
  </AccordionDetails>
  );
};

export default EmploymentForm;
