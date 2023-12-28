import Users from "../pages/Users";
import AddUser from "../pages/AddUser";

export const routers = [
    {
      path: "/",
      element: <Users />,
    },
    {
        path: "/adduser",
        element: <AddUser />,
      },
  ]