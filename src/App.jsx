import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Rootlayout from './layout/root-layout'

import HomeIndex from './pages/home/home-index'
import About from './pages/about/about'

function App() {
    const router = createBrowserRouter([
      {
        element: <Rootlayout />,
        children: [
          {
            path: '/',
            element: <HomeIndex />,
          },
          {
            path: '/about',
            element: <About/>,
          },
          {
            path: '/books',
            // element: <About/>,
          }
        ]
      }
    ])

    return (
      <>
        <RouterProvider router={router} />
      </>
    )
}

export default App
