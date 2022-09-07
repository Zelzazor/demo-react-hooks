import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Effect, Home, Reducer, State } from './pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Home />} />
          <Route path="use-state" element={<State />} />
          <Route path="use-effect" element={<Effect />} />
          <Route path="use-reducer" element={<Reducer />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  // </React.StrictMode>
)
