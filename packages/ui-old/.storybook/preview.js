import React from 'react';
import { ThemeProvider } from '../src/styles/theme';
// import 'pathseg';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider >
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];

export const parameters = {
  controls: { expanded: true },
  dependencies: { withStoriesOnly: true, hideEmpty: true },
};