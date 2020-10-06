import { Box, Grid, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
export interface IResumeSectionProps {
  icon: ReactNode;
  heading: string;
  subtitle?: string;
  children: ReactNode;
}

const ResumeSection: React.FunctionComponent<IResumeSectionProps> = ({
  icon,
  heading,
  subtitle,
  children,
}: IResumeSectionProps) => {
  return (
    <Box pb={8}>
      <Grid item container direction="column" spacing={2}>
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography variant="h2">{heading}</Typography>
        </Grid>
        {subtitle && (
          <Grid item>
            <Typography variant="subtitle1">{subtitle}</Typography>
          </Grid>
        )}
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
};

export default ResumeSection;
