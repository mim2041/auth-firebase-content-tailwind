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
