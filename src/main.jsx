import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'

import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </StrictMode>,
)
