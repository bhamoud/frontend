// --- src/main.jsx ---
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importeren
import './index.css';
import App from './App.jsx';
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* App inpakken */}
      <Suspense fallback={<div>Laden...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
