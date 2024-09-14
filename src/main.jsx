import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import Event from './pages/Event.jsx';
import WebTeam from './pages/WebTeam.jsx';
import EventDetail from './pages/EventDetail.jsx';  // Import EventDetail
import './index.css'
import Gallery from './pages/Gallery/Gallery.jsx';
import Result from './pages/Result/Result.jsx';
import GalleryDetail from './pages/GalleryDetail/GalleryDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "events",
        element: <Event />,
      },
      {
        path: "events/:id",  // Add dynamic route for EventDetail
        element: <EventDetail />,
      },
      {

        path: "webteam",
        element: <WebTeam/>,
      }

        path: "gallery",  // Add dynamic route for EventDetail
        element: <Gallery />,
      },
      {
        path: "results",  // Add dynamic route for EventDetail
        element: <Result />,
      },
       {
         path: "gallery/:id",  // Add dynamic route for EventDetail
        element: <GalleryDetail />,
       },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
