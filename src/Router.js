import { Route, Routes} from "react-router-dom";
import {useState} from 'react'

//import pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

const Router = () => {

  const [isLogin, setIsLogin] = useState(false)

  const pagesData = [
    {
      path: "/*",
      element: <Login setIsLogin={setIsLogin}/>,
      isPivate: isLogin
    },
    {
      path: "/register",
      element: <Register />,
      isPivate: isLogin
    },
    {
      path: "/home",
      element: <Home setIsLogin={setIsLogin}/>,
      isPivate: !isLogin
    },
    {
      path: "/profile",
      element: <Profile />,
      isPivate: !isLogin
    },
  ] 

  const pageRoutes = pagesData.map(({ path, element, isPivate }, idx ) => {
        
        if(isPivate === false){
            return <Route key={idx} path={`${path}`} element={element} />
        }

  });

  return <Routes>{pageRoutes}</Routes>;

};

export default Router;



