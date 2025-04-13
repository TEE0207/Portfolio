import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";

import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; // ✅ Import


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

<React.StrictMode>
<BrowserRouter> {/* ✅ Wrap everything in BrowserRouter */}
  <App />
</BrowserRouter>
</React.StrictMode>
)
