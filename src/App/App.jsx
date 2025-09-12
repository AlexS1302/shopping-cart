import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
