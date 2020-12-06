import React from 'react';
import Section from '../Sections';
import Books from '../Sections/Books';
import Teaching from '../Sections/Teaching';
import About from '../Sections/About';
import Research from '../Sections/Research';
import ExpandableCard from '../Card/ExpandableCard';
import Masthead from '../Masthead';
import { BookCard } from '../Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Footer = () => (
  <footer class="bg-dark container-fluid">
    <div class="col-sm-12">
      <div class="col-sm-10 mx-auto">
        <p class="text-center text-white">
          <em class="muted"> All Rights Reserved </em>
          &copy; 2019 | Dawn M. McBride, Ph.D
        </p>
        <p class="text-center text-white">Campus Box 4620, Normal, IL 61790-4620</p>
      </div>
    </div>
  </footer>
);
function App() {

  return (
    <main id="page-top">
      <Masthead />
      <About />
      <hr class="bg-dark-accent" />
<Teaching />
      <hr class="bg-primary-accent" />

      <Research />
      <hr class="bg-dark-accent" />
      <Section title="Books" id="books" className="bg-primary text-light">
        <div class="col-xs-8 col-md-10 col-lg-11 mx-auto" id="book-slider">
          <BookCard
            title="The Process of Research and Statistical Analysis in Psychology"
            imageSrc="/graphics/books/book1.jpg"
            buttonDestination="https://us.sagepub.com/en-us/nam/the-process-of-research-and-statistical-analysis-in-psychology/book262937"
          />
        </div>
        <p class="nav-inst-mobile text-center font-italic muted text-light">Swipe to scroll</p>
      </Section>
      <hr class="bg-primary-accent" />

      <Section title="Human Memory Lab" id="memory-lab">
        <div class="col-md-6">
          <h2 class="section-title text-left">Human Memory Lab</h2>
          <p class="lead">
            In the Human Memory Lab, we examine the processes involved in different types of memory, including:
            prospective memory, false memory, implicit memory, and forgetting. Students working in the lab have the
            opportunity to develop experimental research skills, presentation skills, and leadership skills. For more
            information about the opportunities in my lab,{' '}
            <a class="text-secondary" href="mailto:dmmcbri@ilstu.edu">
              contact me
            </a>{' '}
            or
            <a
              href="https://psychology.illinoisstate.edu/research/researchApprent/"
              target="_blank"
              rel="noreferrer noopener"
              class="text-secondary pb-6"
            >
              visit the ISU Undergraduate Research Opportunities{' '}
            </a>{' '}
            website.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

export default App;
