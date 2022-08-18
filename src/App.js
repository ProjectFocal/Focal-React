import React from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './shared/Footer.jsx';
import About from './pages/About.jsx';
import { Navigate, useRoutes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import NavStructure from './shared/Navigation/NavStructure.jsx';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

//page imports
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Friends from'./pages/Friends'
import FocalPoints from './pages/FocalPoints'
import SpecialFeature from './pages/SpecialFeature'
import UploadContent from './pages/UploadContent'
import Notifications from './pages/Notifications'
import Explore from './pages/Explore'
import Tech from './pages/Tech'
import Gaming from './pages/Gaming'
import Achievements from './pages/Achievements';






function App(props) {

  return (
    <>
      <BrowserRouter>
        <Router>
        </Router>
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
        { path: 'uploadcontent', element: <UploadContent /> },
        { path: 'notifications', element: <Notifications /> },
        { path: 'explore', element: <Explore /> },
        { path: 'tech', element: <Tech /> },
        { path: 'gaming', element: <Gaming /> },
        { path: 'achievements', element: <Achievements /> },


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




