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
        { path: 'about', element: <About /> },
        { path: 'settings', element: <Settings /> },
        { path: '404', element: <NotFound /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

export default App;
