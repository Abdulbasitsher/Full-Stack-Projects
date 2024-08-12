import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './compnents/home/Home.jsx'
import About from './compnents/about/About.jsx'
import Contact from './compnents/contact/Contact.jsx'
import Github from './compnents/Github/Github.jsx'
import User from './user/User.jsx'
const router = createBrowserRouter([

  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:'',
    element: <Home/>,
    
      },{
        path:'About',
    element: <About/>,
    
      },{
        path:'Contact',
    element: <Contact/>,
    
      },{
        path:'Github',
    element: <Github/>,
    
      },{
        path:'User/:userId',
    element: <User/>,
    
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
