import { AccordionDetails, Grid, TextField, FormControlLabel, Checkbox, Button } from "@material-ui/core";
import { Employment } from "../../interface/resume.interface";

export interface IEmploymentFormProps {
  job: Employment;
  number: number;
  onChange: () => void;
}

const EmploymentForm: React.FunctionComponent<IEmploymentFormProps> = ({
  job: {company, title, location, description}, number, onChange
}: IEmploymentFormProps) => {
  return (
    <AccordionDetails>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item md={12}>
        <TextField
          id={`jobs-title-${number}`}
          name={`jobs-title-${number}`}
          helperText="Job title"
          fullWidth
          variant="filled"
          defaultValue={title}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          id={`jobs-company-${number}`}
          name={`jobs-company-${number}`}
          helperText="Company"
          fullWidth
          variant="filled"
          defaultValue={company}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          id={`jobs-dateFrom-${number}`}
          name={`jobs-dateFrom-${number}`}
          helperText="Start date"
          fullWidth
          variant="filled"
          // defaultValue={dateFrom}
        />
      </Grid>
      <Grid item md={4}>
        <TextField
          id={`jobs-dateTo-${number}`}
          name={`jobs-dateTo-${number}`}
          helperText="End date"
          fullWidth
          variant="filled"
          // defaultValue={dateTo}
        />
      </Grid>
      <Grid item md={4}>
        <FormControlLabel
          control={
            <Checkbox checked={true} name="checkedA" color="primary" />
          }
          label="Currently working"
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          id={`jobs-location-${number}`}
          name={`jobs-location-${number}`}
          helperText="Location"
          fullWidth
          variant="filled"
          defaultValue={location}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          name={`jobs-description-${number}`}
          fullWidth
          helperText="Description"
          id={`jobs-description-${number}`}
          multiline
          variant="filled"
          rows={3}
          defaultValue={description}
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

export default EmploymentForm;
