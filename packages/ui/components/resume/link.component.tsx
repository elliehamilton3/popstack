import { AccordionDetails, Grid, TextField, Button } from "@material-ui/core";
import { Link } from "../../interface/resume.interface";

export interface ILinkFormProps {
  link: Link;
  number: number;
  onChange: () => void;
}

const LinkForm: React.FunctionComponent<ILinkFormProps> = ({
  link: {title, link}, number, onChange
}: ILinkFormProps) => {
  return (
    <AccordionDetails>
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item md={12}>
        <TextField
          id={`link-title-${number}`}
          name={`link-title-${number}`}
          helperText="Title"
          fullWidth
          variant="filled"
          defaultValue={title}
        />
      </Grid>
      <Grid item md={12}>
        <TextField
          id={`link-link-${number}`}
          name={`link-link-${number}`}
          helperText="Link"
          fullWidth
          variant="filled"
          defaultValue={link}
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

export default LinkForm;
