import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddEstagio,
  Admin,
  AllEstagios,
  DashboardLayout,
  DeleteEstagio,
  EditEstagio,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Landing />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }]
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all",
        element: <AllEstagios />
      },
      {
        path: "add",
        element: <AddEstagio />
      },
      {
        path: "edit/:id",
        element: <EditEstagio />
      },
      {
        path: "delete/:id",
        element: <DeleteEstagio />
      },
      {
        path: "stats",
        element: <Stats />
      },
      {
        path: "profile",
        element: <Profile />
      }]
    },
    {
      path: "*",
      element: <Error />
    }
  ]
)

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
