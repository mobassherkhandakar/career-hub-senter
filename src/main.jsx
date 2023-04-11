import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Jobdeteils from './components/JobDeteils/Jobdeteils';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: '/jobdeteils/:id',
        element: <Jobdeteils/>,
        loader: ()=> fetch('futursJob.json')
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render( 
<RouterProvider router={router}/> 
)


{/* <React.StrictMode>
    <App />
  </React.StrictMode>, */}