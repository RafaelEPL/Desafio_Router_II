import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./views/Home"
import Pokemones from "./views/Pokemones";
import Details from "./components/Details";


const  App = () => {
  

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
        path="/pokemones"
        element={<Pokemones />} />
        <Route
        path="/pokemones/:name"
        element={<Details />}
        />

      </Routes>

    </div>
  );
};

export default App;
