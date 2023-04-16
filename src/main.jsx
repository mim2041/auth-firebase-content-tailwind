import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import Main from './Layout/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Header/Home';
import Login from './component/Header/Login';
import Register from './component/Header/Register';
import AuthProviders from './component/Providers/AuthProviders';
import Orders from './component/Header/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './component/Header/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProviders>
      <RouterProvider router={router} />
     </AuthProviders>
  </React.StrictMode>,
)
