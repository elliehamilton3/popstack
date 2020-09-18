/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme } from '@material-ui/core/styles';
import { FontLoader } from './fonts';
import { CreateThemeProvider } from '../createThemeProvider';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#266efb',
            dark: '#1d5fdf',
        },
        secondary: {
            // lightest: '#FFEEF1',
            light: '#FFDFE5',
            main: '#FFBFCC',
        },
        common: {
            black: '#1C1A1A',
        },
        error: {
            main: '#FB4C26',
        },
    },
    typography: {
        fontFamily: 'Circular',
        button: {
            textTransform: 'none',
        },
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.6rem',
        },
    },
});

const ThemeProvider = CreateThemeProvider(theme, FontLoader);

export {
    theme,
    ThemeProvider,
};
