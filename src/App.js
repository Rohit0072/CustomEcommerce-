import logo from './logo.svg';
import './App.css'
import Home from './Components/Pages/home'
import About from './Components/Pages/about'
import Contact from './Components/Pages/contact'
import Error from './Components/Pages/error'
import Login from './Components/Pages/login'
import Signin from './Components/Pages/signin'
import Fashion from './Components/Pages/fashion'
import Cart from './Components/Pages/cart'
import WishList from './Components/Pages/wishlist'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
    { path: '/login', element: <Login/>},
    { path: '/signin', element: <Signin/>},
    { path: '/fashion', element: <Fashion/>},
    { path: '/wishlist', element: <WishList/>},
    { path: '/cart', element: <Cart/>},
    { path: '*', element: <Error/> }
  ]);
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
