import { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import Home from '../src/Components/Home'
import About from "./Components/About";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Home />
     <About />
    </>
  );
}

export default App;
