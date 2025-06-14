import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './index.css'
import App from './App.jsx'
import Remainder from './pages/Remainder.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <Routes>
          
          <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="remainders" element={<Remainder />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
