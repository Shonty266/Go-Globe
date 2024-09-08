import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './Pages/SignUp.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import OtpScreen from './Pages/OTPScreen.jsx'
import Booking from './Pages/Booking.jsx'
import Explore from './Pages/Explore.jsx'
import Profile from './Pages/Profile.jsx'
import ItemDetails from './Pages/PlaceDetails.jsx'
import Ticket from './Pages/Ticket.jsx'
import Settings from './Pages/Settings.jsx'
import Support from './Pages/Support.jsx'
import BookingForm from './Pages/BookingForm.jsx'
import ConfirmationPage from './Pages/ConformationPage.jsx'
import PaymentConfirmation from './Pages/PaymentConformation.jsx'

const router = createBrowserRouter([
  {path:'/' , element:<App/>},
  {path:'/signup' , element:<Signup />},
  {path:'/otpscreen' , element:<OtpScreen />},
  {path:'/login' , element:<Login />},
  {path:'/dashboard' , element:<Dashboard />},
  {path:'/booking' , element:<Booking />},
  {path:'/explore' , element:<Explore />},
  {path:'/profile' , element:<Profile />},
  {path:'/explore/placedetails/:id' , element:<ItemDetails />},
  {path:'/booking/tickets/:city' , element:<Ticket />},
  {path:'/settings' , element:<Settings />},
  {path:'/support' , element:<Support />},
  {path:'/explore/placedetails/bookingform' , element:<BookingForm />},
  {path:'/explore/placedetails/bookingform/conformation' , element:<ConfirmationPage />},
  {path:'/explore/placedetails/bookingform/conformation/paymentconformation' , element:<PaymentConfirmation />},

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
