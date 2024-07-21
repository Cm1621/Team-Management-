import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp';
import PaymentPage from './Components/Payment/Payment';
import HomePage from './Components/ProjectManager/HomePage';
import Chat from './Pages/Chat';
import {KanbanBoard} from './Components/ProjectManager/KanbanBoard'
import { WeekBoard } from './Components/ProjectManager/WeekBoard';
import Tableau from './Components/ProjectManager/Tableau';
import LandingPage from './Pages/LandingPage';
import UserInfo from './Components/ProjectManager/UserInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/LandingPage",
    element: <LandingPage/>,
  },
  {
    path: "/signUp",
    element: <SignUp/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Payment",
    element: <PaymentPage/>,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },
  {
    path: "/Chat",
    element: <Chat/>,
  },
  {
    path: "/Tasks",
    element: <KanbanBoard/>,
  },
  {
    path: "/Weeks",
    element: <WeekBoard/>,
  },
  {
    path: "/Tableau",
    element: <Tableau/>,
  },
  {
    path: "/Tableau",
    element: <Tableau/>,
  },
  {
    path: "/UserInfo",
    element: <UserInfo/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);