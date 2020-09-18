import * as React from 'react';
import { Moment } from 'moment';
import {
  Typography, Grid, makeStyles,
} from '@material-ui/core';
import {
  ArrowBack,
} from '@material-ui/icons';
import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import HelpButton from '../button/help.component';
import Navbar from '../navbar/navbar.component';
import { ThemeProvider } from '../../styles/theme';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '100px',
    '& .MuiInputBase-input': {
      textAlign: 'center',
      letterSpacing: '0.25rem',
    },
  },
}));

export const Page: React.FunctionComponent = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Moment | null>(
    null,
  );

  return (
    // eslint-disable-next-line react/jsx-indent
    <ThemeProvider>
      <Navbar />
      <Grid container justify="center">
        <Grid item>
          <Typography variant="subtitle1" color="textSecondary">Quick Questionnaire</Typography>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          alignContent="center"
        >
          <Grid item>
            <ArrowBack color="disabled" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="textSecondary">
              Previous Question
            </Typography>

          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Typography variant="body1">
            ABOUT YOU
          </Typography>
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="body1">
                2
              </Typography>

            </Grid>
            <Grid item xs={11}>
              <Typography variant="h2">
                Whats your date of birth?
              </Typography>
              <MuiPickersUtilsProvider utils={MomentUtils}>

                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="DD/MM/YYYY"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  placeholder="DD/MM/YYYY"
                  onChange={setSelectedDate}
                  inputVariant="outlined"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  InputProps={{
                    className: classes.root,
                    // className: classes.input,
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end">
        <Grid item xs={2}>
          <HelpButton />
        </Grid>
      </Grid>
    </ThemeProvider>
    // eslint-disable-next-line @typescript-eslint/indent
  );
};
export default Page;
