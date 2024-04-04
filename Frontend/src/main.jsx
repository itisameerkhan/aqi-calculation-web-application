import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./components/Body/Body";
import Search from "./components/Search/Search";
import Error from "./components/Error/Error";
import { Provider } from "react-redux";
import appStore from "./contexts/appSlice";
import Calculator from "./components/Calculator/Calculator";
import Team from "./components/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path:"/team",
        element: <Team />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);
