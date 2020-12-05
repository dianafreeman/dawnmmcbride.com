import React from 'react';

export default function ExpandableCard() {
  return (
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
          My dissertation project tested current theories of the picture superiority effect (better memory for pictures
          than words). A popular theory is dual coding (Paivio, 1991), which states that pictures are better remembered
          because they are encoded with two specific codes (pictorial and verbal) while words elicit just a single code
          (verbal). The extra code associated with pictures give them an advantage during retrieval.​
        </div>
        <div class="card-footer">
          <p class="lead">Selected References</p>
          <ul class="text-muted">
            <li>
              McBride, D. M., &amp; Dosher, B. A. (2002). A comparison of conscious and automatic memory processes for
              picture and word stimuli: A process dissociation analysis. <em>Consciousness and Cognition.</em> 11,
              423-460.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
