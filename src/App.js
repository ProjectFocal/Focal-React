import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './shared/Footer.jsx';
import About from './pages/About.jsx';
import { Navigate, useRoutes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavStructure from './shared/Navigation/NavStructure.jsx';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Friends from'./pages/Friends'
import FocalPoints from './pages/FocalPoints'
import SpecialFeature from './pages/SpecialFeature'
import React, { Component }  from 'react';



function App(props) {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </>
  );
}

function Router() {
  return useRoutes([
    {
      path: '',
      element: <NavStructure />,
      children: [
        { path: '', element: <Home /> },
        { path: 'profile', element: <Profile /> },
        { path: 'friends', element: <Friends /> },
        { path: 'focalpoints', element: <FocalPoints /> },
        { path: 'about', element: <About /> },
        { path: 'settings', element: <Settings /> },
      ],
    },  
    {
      path: '',
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <SignUp /> },
        { path: '404', element: <NotFound /> },
      ],
    },
    {
      path: 'specialfeature',
      children: [
        { path: '', element: <SpecialFeature /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

export default App;




