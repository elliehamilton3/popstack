import React from "react";
import { ThemeProvider, Theme } from "@material-ui/core";

export const CreateThemeProvider = (
  theme: Theme,
  ThemeLoader: React.FC
  // eslint-disable-next-line react/display-name
) => ({ children }): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <ThemeLoader />
    {children}
  </ThemeProvider>
);

export default CreateThemeProvider;
