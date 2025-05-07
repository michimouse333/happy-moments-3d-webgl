import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element with id "root" not found in the DOM.');
}

const root = createRoot(container);

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error: any) {
  console.error('Failed to render the app:', error);
}