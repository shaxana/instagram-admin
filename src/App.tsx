import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routers } from "./routers/routers";
import Navbar from "./layout/Navbar";

function App() {
const router = createBrowserRouter(routers)
  return (
    <>
    <Navbar/>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
