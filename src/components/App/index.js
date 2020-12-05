import React from 'react';
import './App.css';
import Section from '../Section';

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
      {/* <!-- end col-sm-4--> */}
    </div>
    {/* <!-- end row --> */}
  </footer>
);
function App() {
  return (
    <>
      <Section title="About" id="about" className="section bg-light-accent">
        <div className="col-sm-5 mx-auto ml-3 about-sub-section">
          <div className="bg-light rounded-corners">
            <h3 className="display-5 about-subhead">Teaching Interests</h3>
            <ul>
              <li>Research Methods</li>
              <li>Introductory Psychology</li>
              <li>Cognition and Learning</li>
              <li>Statistics</li>
              <li>Memory</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-5 mx-auto mr-3 about-sub-section">
          <div className="bg-light rounded-corners">
            <h3 className="display-5 about-subhead">Research Interests</h3>

            <ul>
              <li>Cognitive Task Choices</li>
              <li>Prospective Memory</li>
              <li>False Memory</li>
              <li>Forgetting</li>
              <li>Implicit Memory</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="Teaching" id="teaching">
        <div class="col-md-6 mx-auto">
          <p class="lead">
            <strong>Fall 2020</strong>
          </p>
          <p class="lead">
            PSY 111: Introduction to Psychology
            <br />
            PSY 253: Cognition &amp;amp; Learning
            <br />
            PSY 368: Human Memory
          </p>
          <br />
          <p class="lead">
            <strong>Spring 2021</strong>
          </p>
          <p class="lead">PSY 231: Research Methods in Psychology</p>
        </div>
        <div class="col-md-4 mx-auto mr-3 text-center">
          <a
            href="https://reggienet.illinoisstate.edu"
            rel="noreferrer noopener"
            target="_blank"
            class="reggienet-btn btn btn-xl btn-round btn-light text-left mx-auto"
          >
            <p class="text-center">View and Submit Assignments via ReggieNet </p>

            <img class="regginet-logo" src="./graphics/reggienet.png" />
          </a>
        </div>

        <p class="text-center mt-4 pt-4 lead">Office Hours (Fall 2020): By appointment on Zoom</p>
      </Section>
      <Section title="Research" id="research">
        <div class="col-sm-12 mx-auto">
          <div id="accordion" class="accordion">
            <div class="expandable-card">
              <div class="card-header" id="cognitiveTaskChoices-heading">
                <h5 class="display-5 mb-0">
                  <button
                    class="btn btn-link"
                    data-toggle="collapse"
                    data-target="#cognitiveTaskChoices"
                    aria-expanded="true"
                    aria-controls="cognitiveTaskChoices"
                  >
                    Cognitive Task Choices
                    <span class="ind-container js-rotate-if-collapsed">
                      <i class="indicator fas fa-chevron-left"></i>
                    </span>
                  </button>
                </h5>
              </div>

              <div
                id="cognitiveTaskChoices"
                class="collapse show"
                aria-labelledby="cognitiveTaskChoices-heading"
                data-parent="#accordion"
              >
                <div class="card-body">
                  How do we decide the order of tasks we need to complete? A recent finding suggests that in some cases,
                  people will complete a task as soon as possible, even if doing so requires extra effort (Rosenbaum et
                  al., 2014). Some of my current work is investigating this effect in cognitive tasks to better
                  understand how we choose when to complete cognitive tasks and whether this choice is based on reducing
                  ones cognitive load.
                </div>
                <div class="card-footer">
                  <p class="lead">Selected References</p>
                  <ul class="text-muted">
                    <li>
                      Rosenbaum, D.A., Fournier, L.R., Levy-Tzedek, S., McBride, D.M., Rosenthal, R., Sauerberger, K. …
                      Zentall, T.R. (2019). Sooner rather than later: Pre-crastination rather than procrastination.
                      <em> Current Directions in Psychological Science </em>, 28, 229-233.
                    </li>
                    <li>
                      VonderHaar, R. L., McBride, D. M., &amp; Rosenbaum, D. A. (2019). Task order choices in cognitive
                      and perceptual-motor tasks: The cognitive-load-reduction (CLEAR) hypothesis.{' '}
                      <em>Attention Perception &amp; Psychophysics</em>, 81, 1-9
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="expandable-card">
              <div class="card-header" id="prospectiveMemory-heading">
                <h5 class="display-5 mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#prospectiveMemory"
                    aria-expanded="false"
                    aria-controls="prospectiveMemory"
                  >
                    Prospective Memory
                    <span class="ind-container js-rotate-if-collapsed">
                      <i class="indicator fas fa-chevron-left"></i>
                    </span>
                  </button>
                </h5>
              </div>

              <div
                id="prospectiveMemory"
                class="collapse"
                aria-labelledby="prospectiveMemory-heading"
                data-parent="#accordion"
              >
                <div class="card-body">
                  Prospective memory (PM) is used when we try to remember to perform a task at a particular time or
                  after a specific event. For example, we use prospective memory when we remember to take medication
                  each night before we go to bed. When we walk into the kitchen to pour ourselves a drink and forget why
                  we went to the kitchen because we remembered three other things we needed to do on the way, our
                  prospective memory has failed us.​​
                </div>
                <div class="card-footer">
                  <p class="lead">Selected References</p>
                  <ul class="text-muted">
                    <li>
                      {' '}
                      McBride, D. M., &amp; Flaherty, M. (in press). Comparing costs in time-based and event-based
                      prospective memory. <em>Memory</em>.{' '}
                      <a href="https://doi.org/10.1080/09658211.2020.1798463" target="_blank" noopener noreferrer>
                        DOI
                      </a>
                    </li>
                    <li>
                      Conte, A. M., &amp; McBride, D. M. (2018). Comparing time-based and event-based prospective memory
                      over short delays. <em>Memory</em>, 26, 936-945.
                    </li>
                    <li>
                      McBride, D. M., &amp; Workman, R. A. (2017). Is prospective memory unique? A comparison of
                      prospective and retrospective memory. In B. Ross (Ed.),{' '}
                      <em>Psychology of Learning and Motivation</em>, vol. 67. San Diego, CA: Academic Press/Elsevier.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="expandable-card">
              <div class="card-header" id="headingTwo">
                <h5 class="display-5 mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#memory"
                    aria-expanded="false"
                    aria-controls="memory"
                  >
                    Memory for Pictures
                    <span class="ind-container js-rotate-if-collapsed">
                      <i class="indicator fas fa-chevron-left"></i>
                    </span>
                  </button>
                </h5>
              </div>
              <div id="memory" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  My dissertation project tested current theories of the picture superiority effect (better memory for
                  pictures than words). A popular theory is dual coding (Paivio, 1991), which states that pictures are
                  better remembered because they are encoded with two specific codes (pictorial and verbal) while words
                  elicit just a single code (verbal). The extra code associated with pictures give them an advantage
                  during retrieval.​
                </div>
                <div class="card-footer">
                  <p class="lead">Selected References</p>
                  <ul class="text-muted">
                    <li>
                      McBride, D. M., &amp; Dosher, B. A. (2002). A comparison of conscious and automatic memory
                      processes for picture and word stimuli: A process dissociation analysis.{' '}
                      <em>Consciousness and Cognition.</em> 11, 423-460.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="expandable-card">
              <div class="card-header" id="headingThree">
                <h5 class="display-5 mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    False Memory
                    <span class="ind-container js-rotate-if-collapsed">
                      <i class="indicator fas fa-chevron-left"></i>
                    </span>
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  In 1995, Roediger and McDermott revived the Deese (1959) paradigm for creating false memories in a
                  laboratory experiment. Using this procedure, Roediger and McDermott showed that subjects will falsely
                  recall and recognize items from a studied word list that were not shown. The false items were induced
                  by lists of words that are strongly associated to the critical item (e.g., falsely recall “sleep” is
                  given “dream”, “bed”, “rest”, “awake”, etc). Subjects will even report an experience of recalling the
                  context with which the critical item appeared (Payne, Ellie, &amp; Blackwell, 1996).​
                </div>
                <div class="card-footer">
                  <p class="lead">Selected References</p>
                  <ul class="text-muted">
                    <li>
                      Coane, J. H., McBride, D. M., &amp; Xu, S. (2020). The feature boost in false memory: The roles of
                      monitoring and critical item identifiability. <em>Memory</em>, 28, 481-493.{' '}
                      <a href="https://doi.org/10.1080/09658211.2020.1735445" target="_blank" noopener noreferrer>
                        DOI
                      </a>
                    </li>
                    <li>
                      McBride, D. M., Coane, J. H., Xu, S., Feng, Y., &amp; Yu, Z. (2019). Short-term false memories
                      vary as a function of list type. <em>Quarterly Journal of Experimental Psychology</em>, 72,
                      2726-2741.
                    </li>
                    <li>
                      Coane, J. H, McBride, D. M., Raulerson, B. A. III, &amp; Jordan, J. S. (2007). False memory in a
                      short-term memory task. <em>Experimental Psychology</em>, 54, 62-70.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="expandable-card">
              <div class="card-header" id="headingThree">
                <h5 class="display-5 mb-0">
                  <button
                    class="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Implicit Memory and Forgetting
                    <span class="ind-container js-rotate-if-collapsed">
                      <i class="indicator fas fa-chevron-left"></i>
                    </span>
                  </button>
                </h5>
              </div>
              <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  My research on implicit and explicit memory (also automatic and conscious memory) has focused on what
                  the differences really are. One popular view of the implicit/explicit distinction is that of separable
                  memory systems for the two forms of memory. Several authors (e.g., Dosher &amp; Rosedale, 1991; Nadel,
                  1994; Schacter &amp; Tulving, 1994) have cited forgetting differences as an important criterion for
                  distinguishing memory systems. Along these lines, claims of differing forgetting rates have been made
                  for implicit and explicit tasks. ​
                </div>
                <div class="card-footer">
                  <p class="lead">Selected References</p>
                  <ul class="text-muted">
                    <li>
                      McBride, D. M. (2015). Implicit memory. In R. Scott &amp; S. Kosslyn (Eds.),{' '}
                      <em>Emerging Trends in the Social and Behavioral Sciences</em>. New Jersey: Wiley &amp; Sons.
                    </li>
                    <li>
                      McBride, D. M., &amp; Dosher, B. A. (1999). Forgetting rates are similar in conscious and
                      automatic memory: A process dissociation study.{' '}
                      <em>Journal of Experimental Psychology: Learning, Memory, and Cognition,</em> 25, 583-607.
                    </li>
                    <li>
                      McBride, D. M., &amp; Dosher, B. A. (1997). A comparison of forgetting in an implicit and explicit
                      memory task. <em> Journal of Experimental Psychology: General</em>, 126, 371-392.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section title="Books" id="books">
        <div class="col-xs-8 col-md-10 col-lg-11 mx-auto" id="book-slider">
          {/* <!-- Card --> */}
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/book1.jpg')"
                alt="The Process of Research and Statistical Analysis in Psychology"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">The Process of Research and Statistical Analysis in Psychology</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/the-process-of-research-and-statistical-analysis-in-psychology/book262937"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Card --> */}
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/manual1.jpg')"
                aria-label="Lab Manual for Psychological Research and Statistical Analysis"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">Lab Manual for Psychological Research and Statistical Analysis</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/lab-manual-for-psychological-research-and-statistical-analysis/book267323"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/book2.jpg')"
                arial-label="The Process of Research in Psychology"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">The Process of Research in Psychology</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/the-process-of-research-in-psychology/book258072"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
              {/* <!-- End Card Body--> */}
            </div>{' '}
            {/* <!-- End Card --> */}
          </div>
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/manual2.jpg')"
                aria-label="Lab Manual for Psychological Research"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">Lab Manual for Psychological Research</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/lab-manual-for-psychological-research/book258130"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
              {/* <!-- End Card Body--> */}
            </div>
            {/* <!-- Card --> */}
          </div>
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/book3.jpg')"
                aria-label="Cognitive Psychology: Theory, Process, and Methodology"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">Cognitive Psychology: Theory, Process, and Methodology</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/cognitive-psychology/book253925"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
              {/* <!-- End Card Body--> */}
            </div>
            {/* <!-- Card --> */}
          </div>
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/book4.jpg')"
                aria-label="The Process of Statistical Analysis in Psychology"
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">The Process of Statistical Analysis in Psychology</p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/the-process-of-statistical-analysis-in-psychology/book248460"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
              {/* <!-- End Card Body--> */}
            </div>
            {/* <!-- Card --> */}
          </div>
          <div class="col-sm-4-no ml-1">
            <div class="card">
              {/* <!-- Card image --> */}
              <div
                class="card-img-top"
                style="background-image: url('./graphics/books/manual4.jpg')"
                aria-label="Lab Manual for Statistical Analysis "
              ></div>{' '}
              {/* <!-- end card image --> */}
              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Text --> */}
                <p class="card-text">Lab Manual for Statistical Analysis </p>
                {/* <!-- Button --> */}
                <a
                  href="https://us.sagepub.com/en-us/nam/cognitive-psychology/book253925"
                  class="btn btn-light btn-small book-btn"
                >
                  <p class="float-left">Visit Sage Publications</p>
                  <span class="float-right">
                    <i class="fas fa-arrow-circle-right ml-2"></i>
                  </span>
                </a>
              </div>
              {/* <!-- End Card Body--> */}
            </div>
            {/* <!-- end Card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        <p class="nav-inst-mobile text-center font-italic muted text-light">Swipe to scroll</p>
      </Section>
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
    </>
  );
}

export default App;
