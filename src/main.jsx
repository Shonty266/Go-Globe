import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Allplaces from './components/Places/Allplaces.jsx'
import AboutusFull from './components/Aboutus/AboutusFull.jsx'
import FeaturesFull from './components/Features/FeaturesFull.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([
  {path:'/' , element:<App/>},
  {path:'/allplaces' , element:<Allplaces/>},
  {path:'/aboutus' , element:<AboutusFull/>},
  {path:'/features' , element:<FeaturesFull />},
  {path:'/contact' , element:<Contact />},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
