import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@dsc/scss/lib/global.css';
import App from './app/app';
import ThemeProvider from './ThemeContext';
import { ToastWrapper } from '@dsc/shared_ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ToastWrapper  theme="dark" />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
