import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './index.css';
import Form from './pages/form';
import App from './App';
import Login from './pages/login';
import Message from './pages/message';
import Interface from './pages/interface';
import reportWebVitals from './reportWebVitals';
import NewsFeed from './pages/interfaces/body/newsfeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "form",
    element: <Form/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "message",
    element: <Message/>
  },
  {
    path: "interface",
    element: <Interface/>
  },
  {
    path: "newsfeed",
    element: NewsFeed
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
