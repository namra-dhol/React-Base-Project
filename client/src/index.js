import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import GetAllRooms from './pages/rooms/GetAllRooms';
import DetailRooms from './pages/rooms/DetailRooms';
import AddRooms from './pages/rooms/AddRooms';
import EditRoom from './pages/rooms/EditRoom';
import AboutUs from './pages/AboutUs';
import GetYourBookings from './pages/Bookings/GetYourBookings';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/rooms" element={<GetAllRooms />} />
        <Route path="/bookings" element={<GetYourBookings />} />
        <Route path="/room/:id" element={<DetailRooms />} />
        <Route path='/room/add' element={<AddRooms />} />
        <Route path='/room/edit/:id' element={<EditRoom />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Route>
    </Routes>  
  </BrowserRouter>
);
