import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './app.css' // Soft UI global

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
