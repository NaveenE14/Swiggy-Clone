
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import About from "./components/About"
import Cart from "./components/Cart"
import Restaurent from "./components/Restaurent"
import Resdetails from "./components/ResDetails"
import Header from "./components/Header"
import ResContainer from "./components/ResContainer"
import { Outlet } from 'react-router-dom'
import './items.css'
import './header.css'
import './resCard.css'
import  './lines.css'
import './itemcategory.css'
import './itemlists.css'
import './cart.css'

const Home = () => {
  return (
    <>
      <Header />
    
      <Outlet/> 
    </>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[{
      path: "/",
      element:<ResContainer/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"cart",
      element:<Cart/>
    },
    {
      path:'restaurant/:Resid',
      element:<Resdetails/>
    }


]},
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
])

const App = () => {
  return (
    
  <RouterProvider router={router} />
)}

export default App





