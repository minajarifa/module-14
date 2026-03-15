import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import SingleForm from './Pages/SingleForm/SingleForm.jsx';
import Uncrontrolled from './Pages/Uncontrolled/Uncrontrolled.jsx';
import ProductManegment from './Pages/ProductManagment/ProductManegment.jsx';
import House from './Pages/House/House.jsx';
import BookDetails from './Pages/BookDetails/BookDetails.jsx';
import ListedBooks from './Pages/ListedBooks/ListedBooks.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
      children: [
      {
        path: "/",
        element: <House />,
      },
      {
        path: "/Listed-Books",
        Component: ListedBooks,
         loader: ()=>fetch(`/booksData.json`)
      },
      {
        path: "/BookDetails/:id",
        Component: BookDetails,
        loader: ()=>fetch(`/booksData.json`)
      },
      {
        path: "/SingleForm",
        Component: SingleForm,
      },
      {
        path: "/Uncrontrolled",
        Component: Uncrontrolled,
      },
      {
       path: "/ProductManegment",
        Component: ProductManegment,
      },
    ],
  },
  {
    path:'/Login',
    Component:Login
  },
  {
    path:'/Register',
    Component:Register
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)