/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme, lighten } from '@material-ui/core/styles';
import { FontLoader } from './fonts';
import { CreateThemeProvider } from '../createThemeProvider';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0057FF',
        },
        secondary: {
            main: '#FF8C4C',
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
    overrides: {
        MuiOutlinedInput: {
            root: {
                backgroundColor: lighten('#0057FF', 0.95),
                '&:hover $notchedOutline': {
                    borderColor: '#0057FF',
                    borderWidth: '2px'
                },
                '&$focused $notchedOutline': {
                    borderWidth: '1px'
                 }
            },
            focused: {},
            notchedOutline: {}
        }
    }
});

const ThemeProvider = CreateThemeProvider(theme, FontLoader);

export {
    theme,
    ThemeProvider,
};
