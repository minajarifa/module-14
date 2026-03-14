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
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)