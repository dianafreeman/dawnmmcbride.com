import React from "react";
import Books from "../Sections/Books";
import MemoryLab from "../Sections/MemoryLab";
import Teaching from "../Sections/Teaching";
import About from "../Sections/About";
import Research from "../Sections/Research";
import Masthead from "../Sections/Masthead";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

const Footer = () => (
  <footer class="bg-dark container-fluid">
    <div class="col-sm-12">
      <div class="col-sm-10 mx-auto">
        <p class="text-center text-white">
          <em class="muted"> All Rights Reserved </em>
          &copy; 2019 | Dawn M. McBride, Ph.D
        </p>
        <p class="text-center text-white">
          Campus Box 4620, Normal, IL 61790-4620
        </p>
      </div>
    </div>
  </footer>
);
function App() {
  return (
    <main id="page-top">
      <Masthead />
      <hr class="bg-primary-accent" />
      <About />
      <hr class="bg-dark-accent" />
      <Teaching />
      <hr class="bg-primary-accent" />
      <Research />
      <hr class="bg-dark-accent" />
      <Books />
      <hr class="bg-primary-accent" />
      <MemoryLab />
      <hr class="bg-dark-accent" />
      <Footer />
    </main>
  );
}

export default App;
