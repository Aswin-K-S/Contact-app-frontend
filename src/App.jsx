import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Add from "./Components/Add";
import PageNotFound from "./Components/PageNotFound";
import View from "./Components/View";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/view/:id" element={<View/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
