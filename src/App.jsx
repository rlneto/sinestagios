import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react'
import UserContext from './UserContext'
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
  Inbox
} from './pages'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Landing />,
      //   errorElement: <Error />,
      // },
      {
        index:true,
        path: "",
        element: <Login />,
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
        index:true,
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
        path: "inbox",
        element: <Inbox />,
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
  const [loggado, setLoggado] = useState(false)
  return (
    <UserContext.Provider value={{loggado, setLoggado}}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
