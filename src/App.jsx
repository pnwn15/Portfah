import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Home/Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      </>
  );
}

export default App;
