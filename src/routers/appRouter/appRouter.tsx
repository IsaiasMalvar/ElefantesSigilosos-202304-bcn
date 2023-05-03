import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../components/App/App";
import CardsPage from "../../pages/CardsListPage/CardsListPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cards",
        element: <CardsPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
