import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Index from './pages/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
