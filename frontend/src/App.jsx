import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Pendapatan from './Pendapatan.jsx';
import Pesanan from './Pesanan.jsx';
import Chat from './Chat.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import EditProfile from './EditProfile.jsx';
import Artikel from './Artikel.jsx';
import Bengkel from './Bengkel.jsx';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />}
        >
          <Route path="/dashboard" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/pendapatan" element={<PrivateRoute><Pendapatan /></PrivateRoute>} />
          <Route path="/pesanan" element={<PrivateRoute><Pesanan /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
          <Route path="/edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
          <Route path="/artikel" element={<PrivateRoute><Artikel /></PrivateRoute>} />
          <Route path="/bengkel" element={<PrivateRoute><Bengkel /></PrivateRoute>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
