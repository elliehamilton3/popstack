import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
}));

const ResumeLoadingPlaceholder: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box p={4}>
    <Grid container justify="space-between" alignItems="flex-end">
      <Grid item xs={4}>
        <Typography variant="h2">
          <Skeleton width="100%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton width="50%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton width="50%" />
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">
          <Skeleton width="100%" />
        </Typography>
        <Typography variant="body1">
          <Skeleton width="100%" />
        </Typography>
      </Grid>
    </Grid>
    <Box style={{paddingTop: "4vh"}} >
    <Grid container justify="space-between" spacing={4} >
      <Grid item xs={4}>
        <Typography variant="h2" style={{paddingTop: "6px"}}>
          <Skeleton width="100%" />
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h1">
          <Skeleton width="100%" />
        </Typography>
      </Grid>
    </Grid>
    <Grid container justify="space-between" spacing={4} >
      <Grid item xs={4}>
        <Typography variant="h2" style={{paddingTop: "6px"}}>
          <Skeleton width="100%" />
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h1">
          <Skeleton width="100%" />
        </Typography>
      </Grid>
    </Grid>
    <Grid container justify="space-between" spacing={4} >
      <Grid item xs={4}>
        <Typography variant="h2" style={{paddingTop: "6px"}}>
          <Skeleton width="100%" />
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h1">
          <Skeleton width="100%" />
        </Typography>
      </Grid>
    </Grid>
    </Box>
    <Box style={{paddingTop: "8vh"}}>
    <Grid container justify="space-between" spacing={4}>
      <Grid item xs={4}>
        <Typography variant="h3">
          <Skeleton width="100%" />
        </Typography>
      </Grid>
    </Grid>
    </Box>
  </Box>
  );
};

export default ResumeLoadingPlaceholder;
