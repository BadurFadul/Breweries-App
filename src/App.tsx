import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import React from 'react'
import BreweriesListWithLoading from './Components/BreweriesList'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Companies from './Pages/Companies'
import SingleCompany from './Pages/SingleCompany'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement: <NotFound />,
    children: [
      {
        path:"/companies",
        element: <Companies/>
      },
      {
        path: "companies/:id",
        element: <SingleCompany/>
      }
    ]
  },
 
])

const App = () => {
  return (
    <RouterProvider router={router}/>

  )
}

export default App