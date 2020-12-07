/* eslint-disable @typescript-eslint/indent */
import { createMuiTheme, lighten } from '@material-ui/core/styles';
import { SkeletonClassKey } from '@material-ui/lab/Skeleton';
import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';

declare module '@material-ui/core/styles/overrides' {
  export interface ComponentNameToClassKey {
    MuiSkeleton: SkeletonClassKey;
    MuiAutocomplete: AutocompleteClassKey;
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0057FF",
      dark: "#0046CF"
    },
    secondary: {
      main: "#FF8C4C",
    },
    common: {
      black: "#0C0C0C",
    },
  },
  typography: {
    fontFamily: ["Inter", "Helvetica", "Arial", "Sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.5rem",
      lineHeight: "1.2",
      fontWeight: 700,
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      }
    },
    h2: {
      fontSize: "1.375rem",
      fontWeight: 600,
      lineHeight: "1.2",
      "@media (max-width: 600px)": {
        fontSize: "1.25rem",
      }
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: "1.25",
      "@media (max-width: 600px)": {
        fontSize: "1.125rem",
      }
    },
    subtitle1: {
      fontSize: "0.9375rem",
      lineHeight: 1.2,
      opacity: 0.7,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.375,
      fontWeight: 300
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.375,
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
    MuiSkeleton: { root: {
      backgroundColor: lighten("#0057FF", 0.9),
    }},
    MuiAutocomplete: {
      tag: {
      margin: "8px 3px"
    },
    inputRoot: {
      paddingTop: "0px !important",
    }  },
    MuiFormControl: { root: { flexDirection: "column-reverse" } },
    MuiAppBar: {
      root: {
        boxShadow: "none",
      },
    },
    MuiToolbar: { 
      root: {
      backgroundColor: "#fff",
      color: "#0C0C0C"
    }},
    MuiButton: {
      outlined: {
        border: "1px solid #1C1A1A",
        padding: "18px 26px"
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
      outlinedSizeSmall: {
        padding: "10px 20px"
      },
      contained: {
        padding: "18px 26px"
      },
      containedSizeSmall: {
        padding: "10px 20px"
      }
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

export default theme;