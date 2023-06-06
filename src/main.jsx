import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/pages/Home.jsx'
import Movies from './components/pages/Movies.jsx'
import Series from './components/pages/Series.jsx'
import Bookmarked from './components/pages/Bookmarked.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store.js'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/movies',
    element: <Movies/>
  },
  {
    path:'/series',
    element: <Series/>
  },
  {
    path:'/bookmarked',
    element: <Bookmarked/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
