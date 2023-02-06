import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './components/Layout/Main/Main';
import Home from './components/Pages/Home/Home';
import Service from './components/Pages/Service/Service';
import About from './components/Pages/About/About';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Videos from './components/Pages/Videos/Videos';
import Cart from './components/Pages/Cart/Cart';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/service',
          element:<Service/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/portfolio',
          element:<Portfolio/>
        },
        
        {
          path:'/videos',
          element:<Videos/>
        },
        
        {
          path:'/cart',
          element:<Cart/>
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
