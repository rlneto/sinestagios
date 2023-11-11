import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
  {
    path: '/sobre',
    element: <h1>Sobre o SINEstágios</h1>
  }
])

const App = () => {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
