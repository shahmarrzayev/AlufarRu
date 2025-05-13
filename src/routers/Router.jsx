import ClientRoot from "../pages/ClientRoot";
import Home from "../pages/home/Home";



export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // },
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },

];
