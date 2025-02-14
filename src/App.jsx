import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Ozbekiston from "./pages/Ozbekiston";
import Iqtisodiyot from "./pages/Iqtisodiyot";
import Jamiyat from "./pages/Jamiyat";
import Sport from "./pages/Sport";
import FanTexnika from "./pages/FanTexnika";
import NuqtayiNazar from "./pages/NuqtayiNazar";
import Audio from "./pages/Audio";
import NotFound from "./pages/NotFound";
import Jahon from "./pages/Jahon";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ozbekiston",
      element: <Ozbekiston />,
    },
    {
      path: "/jahon",
      element: <Jahon />,
    },
    {
      path: "/iqtisodiyot",
      element: <Iqtisodiyot />,
    },
    {
      path: "/sport",
      element: <Sport />,
    },
    {
      path: "/jamiyat",
      element: <Jamiyat />,
    },
    {
      path: "/fantexnika",
      element: <FanTexnika />,
    },
    {
      path: "/nuqtayinazar",
      element: <NuqtayiNazar />,
    },
    {
      path: "/audio",
      element: <Audio />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
