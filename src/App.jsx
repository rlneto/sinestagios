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
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <Error />,
      }]
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "all",
        element: <AllEstagios />,
        errorElement: <Error />,
      },
      {
        path: "add",
        element: <AddEstagio />,
        errorElement: <Error />,
      },
      {
        path: "edit/:id",
        element: <EditEstagio />,
        errorElement: <Error />,
      },
      {
        path: "delete/:id",
        element: <DeleteEstagio />,
        errorElement: <Error />,
      },
      {
        path: "stats",
        element: <Stats />,
        errorElement: <Error />,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
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
