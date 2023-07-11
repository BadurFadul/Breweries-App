import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Companies from './Pages/Companies'
import SingleCompany from './Pages/SingleCompany'
import Contact from './Pages/Contact'
import Intro from './Pages/Intro'
import Default from './Pages/Default'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Default/>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Intro/>
      },
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