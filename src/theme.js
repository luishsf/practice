import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    // primary: {
    //   main: '#240046',
    // },
    // secondary: {
    //   main: '#FF6D00',
    // },
    primary: {
      main: '#6838ad',
    },
    secondary: {
      main: '#fb6634',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1e0241',
    },
    // background: {
    //   default: '#240046',
    // },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
