import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Post from './View/Post/Post';
import Home from './View/Home/Home';
import ReadPost from './View/ReadPosts/ReadPost';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  
  {
   path:'/',
   element:<Home/>
  },
  {
     path: '/app',
     element:<App/>
   },
   {
     path: '/post',
     element:<Post/>
   },
   {
      path: '/post/read/:id',
      element:<ReadPost/>
   },
   {
    path: '*',
    element:<h2>Not Found</h2>
   }
])

root.render(<RouterProvider router={router} />);
