import React from 'react';
import { IReactProps } from 'interface/reactProps.interface';
import { ThemeProvider, Theme } from '@material-ui/core';

export const CreateThemeProvider = (
  theme: Theme,
  ThemeLoader: React.FC,
) => ({ children }: IReactProps): React.ReactElement => (
  <ThemeProvider theme={theme}>
    <ThemeLoader />
    {children}
  </ThemeProvider>
);

export default CreateThemeProvider;
