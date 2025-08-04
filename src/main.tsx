import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// import { registerSW } from 'virtual:pwa-register';

// registerSW(); // Automatically registers and updates the service worker

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
