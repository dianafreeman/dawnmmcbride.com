import React from 'react';

const SECTION_TEXT = `My research interests are in human memory broadly and forgetting, prospective memory, false memory, and
              task choices more specifically. My teaching interests/experience includes introductory psychology,
              research methods and statistics, cognition and learning, and human memory.`;
export default function Section({ title = 'About', description, children, ...rest }) {
  return (
    <section {...rest}>
      <div className="container">
        <h2 className="text-center section-title">{title}</h2>
        <div className="row">
          {description && (
            <div className="col-sm-10 mx-auto">
              <p className="lead">{description || SECTION_TEXT}</p>
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
