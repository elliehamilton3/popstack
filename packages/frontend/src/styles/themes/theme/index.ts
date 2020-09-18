/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme } from '@material-ui/core/styles';
import { FontLoader } from './fonts';
import { CreateThemeProvider } from '../createThemeProvider';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fba5a6',
            main: '#ed1f2a',
        },
        secondary: {
            main: '#f6be11',
        },
        common: {
            black: '#1C1A1A',
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
