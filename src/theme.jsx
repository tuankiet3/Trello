import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APPBAR_HEIGHT = "58px";
const BOARBAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${BOARBAR_HEIGHT} - ${APPBAR_HEIGHT})`;
const HEADER_HEIGHT = "50px";
const FOOTER_HEIGHT = "58px";
// A custom theme for this app
const theme = extendTheme({
  Custom: {
    appBarHeight: APPBAR_HEIGHT,
    boarBarHeight: BOARBAR_HEIGHT,
    boarContent: BOARD_CONTENT_HEIGHT,
    contentHeaderHeight: HEADER_HEIGHT,
    contentFooterHeight: FOOTER_HEIGHT,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            // m: "0 5px",
            // p: "0, 5px",
            m: "5px",
            backgroundColor: "#ced0da",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        },
      },
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          fontSize: "0.875rem",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: () => ({
          // color: theme.palette.primary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => ({
          // color: theme.palette.primary.main,
          fontSize: "0.875rem",
        }),
        // notchedOutline: ({ theme }) => ({
        //   borderColor: theme.palette.primary.main,
        //   // color: theme.palette.primary.main,
        // }),
      },
    },
  },
  // ...other properties
});

export default theme;
