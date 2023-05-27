import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'modern-normalize';
import { App } from 'components/App';
import { theme } from './constants/theme';
import { store } from './redux/store';
import { GlobalStyle } from './GlobalStyle.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
