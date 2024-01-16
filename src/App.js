import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RestaurantPage from './pages/RestaurantPage';
import SignupPage from './pages/SignupPage';
import HotelPage from './pages/HotelPage';
import TodoPage from './pages/TodoPage';
import BookingPage from './pages/BookingPage';
import ProfilePage from './pages/ProfilePage';
import HeaderSection from './components/Layout/HeaderSection';
import FooterSection from './components/Layout/FooterSection';
import PrivateRoute from './context/PrivateRoute';


function App() {
  return (
    <AuthProvider>
    <Router>
      <HeaderSection/>
      <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path='/login' element = {<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/stays' element = {<HotelPage/>}/>
          <Route path='/restaurants' element = {<RestaurantPage/>}/>
          <Route path='/todo' element = {<TodoPage/>}/>
          <Route path='/stays/:name' element = {<BookingPage/>}/>
          <Route 
            path='/profile' 
            element={
              <PrivateRoute>
                <ProfilePage/>
              </PrivateRoute>
            }
          />
         </Routes>
      <FooterSection/>
    </Router>
    </AuthProvider>
  )
}

export default App
