import React from 'react';

export default function Card({ imageSrc, text, buttonText, buttonDestination }) {
  return (
    <div className="item">
      <div
        className="card-img-top"
        style={`background-image: url('${imageSrc}')`}
        alt="The Process of Research and Statistical Analysis in Psychology"
      ></div>

      <div className="card-body">
        <p className="card-text">The Process of Research and Statistical Analysis in Psychology</p>

        <a
          href="https://us.sagepub.com/en-us/nam/the-process-of-research-and-statistical-analysis-in-psychology/book262937"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light btn-small book-btn"
        >
          <p className="float-left">Visit Sage Publications</p>
          <span className="float-right">
            <i className="fas fa-arrow-circle-right ml-2"></i>
          </span>
        </a>
      </div>
    </div>
  );
}
