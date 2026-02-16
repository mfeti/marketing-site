import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
)
