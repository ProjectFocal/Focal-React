import React from 'react';
import { Component } from "react";
import './App.css';
import Home from './pages/Home.jsx';
import Footer from './shared/Footer.jsx';
import About from './pages/About.jsx';
import { Navigate, useRoutes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import NavStructure from './shared/Navigation/NavStructure.jsx';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AuthService from "./services/auth.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventBus from "./common/EventBus";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


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
import PrivacyPolicy from './pages/PrivacyPolicy';
import Saved from './pages/Saved';


class App2 extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
}
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
        { path: 'privacypolicy', element: <PrivacyPolicy /> },
        { path: 'saved', element: <Saved /> },
        


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




