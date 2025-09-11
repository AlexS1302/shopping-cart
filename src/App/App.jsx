import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
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
