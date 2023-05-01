import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cards",
        element: <p>CARDS PAGE</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
