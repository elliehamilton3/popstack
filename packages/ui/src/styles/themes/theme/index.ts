/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme, lighten } from '@material-ui/core/styles';
import { FontLoader } from './fonts';
import { CreateThemeProvider } from '../createThemeProvider';
import '../../../assets/css/inter.css';


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
        fontFamily: ['Inter', 'Helvetica', 'Arial', 'Sans-serif'].join(','),
        button: {
            textTransform: 'none',
        },
        h1: {
            fontSize: '1.625rem',
        },
        h2: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: "0.9375rem",
            lineHeight: 1.2,
            opacity: 0.7
        }
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
        },
        MuiFilledInput: {
            root: {
                backgroundColor: lighten('#0057FF', 0.95),
                borderBottomColor: '#0057FF',
                '&:hover': {
                    backgroundColor: lighten('#0057FF', 0.90),
                    
                },
                '&$focused': {
                    backgroundColor: lighten('#0057FF', 0.90),
                 }
            },
            focused: {},
            underline:{
                 '&::before': {
                    borderBottomColor: '#0057FF',
                },
                '&:hover': {
                    '&::before': {
                        borderBottomColor: '#0057FF',
                    }
                },
            }
        },
        
        MuiFormHelperText: {
            contained:{marginLeft: "0px", marginTop: "0px", marginBottom: "6px"}
        },
        MuiFormControl: {root: {flexDirection: "column-reverse"}},
        MuiAppBar:{
            root: {
            boxShadow: "none"
        }
        },
        MuiButton: {
            outlinedSecondary:{
                color:'#1C1A1A',
                border: lighten('#0057FF', 0.7),
                borderStyle: "dashed",
                borderWidth: "1px",

                "&:hover":{
                border: lighten('#0057FF', 0.7),
                borderStyle: "dashed",
                borderWidth: "1px",
                backgroundColor: lighten('#0057FF', 0.96),
            }
        }}
    }
});

const ThemeProvider = CreateThemeProvider(theme, FontLoader);

export {
    theme,
    ThemeProvider,
};
