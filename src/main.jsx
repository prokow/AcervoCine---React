import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home.jsx'
import Filme from './components/Filme.jsx'
import Search from './components/Search.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Filme />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
