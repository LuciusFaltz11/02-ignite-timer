import { ThemeProvider } from 'styled-components';
import { Router } from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
