import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './components/Layout/Main/Main';
import Home from './components/Pages/Home/Home';
 
 
import Register from './components/RandomPages/Register/Register';
import Login from './components/RandomPages/Login/Login';
import AboutMainPage from './components/Pages/AboutMainPage/AboutMainPage';
import PortfolioMainPage from './components/Pages/PortfolioMainPage/PortfolioMainPage';
import ServiceMainPage from './components/Pages/ServiceMainPage/ServiceMainPage';
import CartDetails from './components/RandomPages/CartDetails/CartDetails';
import PrivateRoute from './Route/PrivateRoute';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
 
 
 
function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          loader: ()=>{
            return  fetch('https://marketing-tix-server.vercel.app/plan');
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
            return  fetch('https://marketing-tix-server.vercel.app/plan');
          },
          element: <PortfolioMainPage/>
        }, 
 
        {
          path:'/cart/:id',
          loader: ({params})=>{
            return fetch(`https://marketing-tix-server.vercel.app/plan/${params.id}`)
          },
          element: <PrivateRoute><CartDetails/></PrivateRoute>
        },

        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'*',
          element:<NotFoundPage/>
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
