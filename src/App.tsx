import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Companies from './Pages/Companies'
import SingleCompany from './Pages/SingleCompany'
import Contact from './Pages/Contact'

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
      },
      {
        path: "contact",
        element: <Contact/>
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