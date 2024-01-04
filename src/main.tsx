import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Routes/Home.tsx'
import ContactPage from './pages/Routes/ContactPage.tsx'
import ProjectsPage from './pages/Routes/ProjectPage.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/contact",
    element: <ContactPage/>
  },
  {
    path:"/portfolio",
    element: <ProjectsPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
