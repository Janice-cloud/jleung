import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Navbar from "./components/NavTabs";
import Footer from "./components/Footer/index";


function App() {
  return (
    <div>
      <BrowserRouter basename= {process.env.PUBLIC_URL}>
        <Navbar />
        <Route exact path=  "/"  component={Home} />
        <Route exact path= "/About"  component={About} />
        <Route exact path= "/Projects" component={Projects} />
        <Route path= "/Contact" component={Contact} />
        <Footer/>
      </BrowserRouter>
     </div>
  );
}

export default App;
