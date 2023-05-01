import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import Error from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import StartPage from './pages/StartPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'start',
        element: <StartPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
