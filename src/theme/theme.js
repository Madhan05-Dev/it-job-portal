import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2"
    },
    secondary: {
      main: "#0a2540"
    },
    background: {
      default: "#f4f6f8"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif"
  },
  shape: {
    borderRadius: 10
  }
});

export default theme;
