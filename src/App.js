import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './components/Layout/Main/Main';
import Home from './components/RandomPages/Home/Home';
 
import Videos from './components/RandomPages/Videos/Videos';
import Cart from './components/RandomPages/Cart/Cart';
import Register from './components/RandomPages/Register/Register';
import Login from './components/RandomPages/Login/Login';
import AboutMainPage from './components/Pages/AboutMainPage/AboutMainPage';
import PortfolioMainPage from './components/Pages/PortfolioMainPage/PortfolioMainPage';
import ServiceMainPage from './components/Pages/ServiceMainPage/ServiceMainPage';
 
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          loader: ()=>{
            return  fetch('plan.json');
          },
          element:<Home/>
        },
        {
          path:'/service',
          element: <ServiceMainPage/>
        },
        {
          path:'/about',
          element:<AboutMainPage/>
        },
        {
          path:'/portfolio',
          loader: ()=>{
            return  fetch('plan.json');
          },
          element: <PortfolioMainPage/>
        },
        
        {
          path:'/videos',
          element:<Videos/>
        },
        
        {
          path:'/cart',
          element:<Cart/>
        },

        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        }
        
        
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
