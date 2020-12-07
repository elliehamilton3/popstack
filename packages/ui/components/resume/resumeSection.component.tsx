import { Box, Grid, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import { Skeleton } from "@material-ui/lab";
export interface IResumeSectionProps {
  icon: ReactNode;
  heading: string;
  subtitle?: string;
  children: ReactNode;
  loading?: boolean;
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = ({
  icon,
  heading,
  subtitle,
  children,
  loading = false,
}: IResumeSectionProps) => {
  return (
    <Box pb={8}>
      <Grid item container direction="column" spacing={2}>
      { !loading && <Grid item>{icon}</Grid>}
        <Grid item>
          <Typography variant="h3"> { loading ? <Skeleton width="25%" />: heading}</Typography>
        </Grid>
        {subtitle && (
          <Grid item>
            <Typography variant="subtitle1">{ loading ? <Skeleton width="50%" />:subtitle}</Typography>
          </Grid>
        )}
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
};

export default ResumeSection;
