import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import './App.css';
import theme from './styles/theme';
import Appbar from './components/Appbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{
        backgroundColor: "#fff"
      }}>
        <Appbar />

      </Container>
    </ThemeProvider>
  );
}

export default App;
