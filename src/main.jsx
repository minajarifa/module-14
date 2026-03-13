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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
      children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/SingleForm",
        Component: SingleForm,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)