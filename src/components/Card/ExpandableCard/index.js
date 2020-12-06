import React from 'react';

const styles = {
  background: 'whitesmoke',
borderRadius:' 25px',
borderBottom:' 3px solid white',
borderRight:' 3px solid white',
borderLeft:' 3px solid white',
}
export default function ExpandableCard({ title, body, toggleSlug, children, ...rest }) {
  return (
    <div style={styles}>
      <div class="card-header" id={`${toggleSlug}-heading`}>
        <h5 class="display-5 mb-0">
            {title}
        </h5>
            <span class="ind-container js-rotate-if-collapsed">
              <i class="indicator fas fa-chevron-left"></i>
            </span>
      </div>
      <div id={toggleSlug} class="" aria-labelledby={`${toggleSlug}-heading`} data-parent="#accordion">
        <div class="card-body">{body}</div>
        <div class="card-footer">{children}</div>
      </div>
      </div>
  );
}
