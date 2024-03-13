import { Route, Routes} from "react-router-dom";
import {useEffect, useState} from 'react'

//import pages
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'

const Router = () => {

  const [role, setRole] = useState('guest')

  useEffect(() => {
    const passed = localStorage.getItem("isLogin")

    if(passed){
      setRole('user')
    }

  },[])

  const pagesData = {
    user: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    guest: [
        {
        path: "/",
        element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
    ]
  }
   

  const pageRoutes = pagesData[role].map(({ path, element }, idx ) => {
        
      return <Route key={idx} path={`${path}`} element={element} />

  });

  return <Routes>{pageRoutes}</Routes>;

};

export default Router;



