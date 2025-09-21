import App from "../App/App.jsx";
import Shop from "../components/Shop/Shop.jsx";
import Cart from "../components/Cart/Cart.jsx";
import HomePage from "../components/HomePage/HomePage.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";

const routes = [
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
