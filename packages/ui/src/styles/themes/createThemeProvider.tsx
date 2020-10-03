import React from "react";
import { IReactProps } from "../../interface/reactProps.interface";
import { ThemeProvider, Theme } from "@material-ui/core";

export const CreateThemeProvider = (
  theme: Theme,
  ThemeLoader: React.FC
  // eslint-disable-next-line react/display-name
) => ({ children }: IReactProps): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <ThemeLoader />
    {children}
  </ThemeProvider>
);

export default CreateThemeProvider;
