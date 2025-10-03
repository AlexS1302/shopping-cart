import { Outlet } from "react-router";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={styles.App}>
      <main>
        <header>
          <Header />
        </header>
        <Outlet context={{ cartItems, setCartItems }} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
