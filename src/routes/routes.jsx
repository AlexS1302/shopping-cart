import App from "../App/App.jsx";
import Shop from "../components/Pages/Shop/Shop.jsx";
import Cart from "../components/Pages/Cart/Cart.jsx";
import HomePage from "../components/Pages/HomePage/HomePage.jsx";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage.jsx";

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
