import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableUser from "./route/TableUser";
import Homepage from "./route/Homepage";
import UserDetail from "./route/UserDetail";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/TableUser",
    element: <TableUser />
  },
  {
    path:"/UserDetail/:id", 
    element:<UserDetail />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


