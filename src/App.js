import './App.css';
import ButtonAppBar from './components/navbar';
import CenteredGrid from './components/main';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'red',
      main: 'red',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: 'red',
      main: 'red',
      dark: '#cb9ca1',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
      <>
      <main>
        <ButtonAppBar />
        <CenteredGrid />
      </main>
      </>
  );
}

export default App;


