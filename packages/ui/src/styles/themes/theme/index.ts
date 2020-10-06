/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme, lighten } from "@material-ui/core/styles";
import { FontLoader } from "./fonts";
import { CreateThemeProvider } from "../createThemeProvider";
import "../../../assets/css/inter.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0057FF",
    },
    secondary: {
      main: "#FF8C4C",
    },
    common: {
      black: "#1C1A1A",
    },
  },
  typography: {
    fontFamily: ["Inter", "Helvetica", "Arial", "Sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.625rem",
      lineHeight: "1.2",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.375rem",
      lineHeight: "1.25",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "0.9375rem",
      lineHeight: 1.2,
      opacity: 0.7,
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.25,
      fontWeight: 300
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.25,
      fontWeight: 700,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: lighten("#0057FF", 0.95),
        "&:hover $notchedOutline": {
          borderColor: "#0057FF",
          borderWidth: "2px",
        },
        "&$focused $notchedOutline": {
          borderWidth: "1px",
        },
      },
      focused: {},
      notchedOutline: {},
    },
    MuiFilledInput: {
      root: {
        backgroundColor: lighten("#0057FF", 0.95),
        borderBottomColor: "#0057FF",
        "&:hover": {
          backgroundColor: lighten("#0057FF", 0.9),
        },
        "&$focused": {
          backgroundColor: lighten("#0057FF", 0.9),
        },
      },
      focused: {},
      underline: {
        "&::before": {
          borderBottomColor: "#0057FF",
        },
        "&:hover": {
          "&::before": {
            borderBottomColor: "#0057FF",
          },
        },
      },
      input: { padding: "20px 12px 10px" },
    },

    MuiFormHelperText: {
      contained: { marginLeft: "0px", marginTop: "0px", marginBottom: "6px" },
    },
    MuiFormControl: { root: { flexDirection: "column-reverse" } },
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
    MuiToolbar: { 
      root: {
      backgroundColor: "#1C1A1A",
      color: "#FFB7D5"
    }},
    MuiButton: {
      outlined: {
        border: "1px solid #1C1A1A",
      },
      outlinedSecondary: {
        color: "#1C1A1A",
        border: lighten("#0057FF", 0.7),
        borderStyle: "dashed",
        borderWidth: "1px",

        "&:hover": {
          border: lighten("#0057FF", 0.7),
          borderStyle: "dashed",
          borderWidth: "1px",
          backgroundColor: lighten("#0057FF", 0.96),
        },
      },
    },
    MuiAccordion: {
      root: {
        boxShadow: "none",
        border: lighten("#0057FF", 0.7),
        borderWidth: "1px",
        borderStyle: "solid",
        padding: "8px",
      },
    },
  },
});

const ThemeProvider = CreateThemeProvider(theme, FontLoader);

export { theme, ThemeProvider };
