import React, { useEffect, useState } from "react";
import reggienet from "../../../graphics/reggienet.png";
import Section from "..";
import siteData from "../../../siteData.json";
import coursesPath from "../../../content/courses.md";
import ReactMarkdown from 'react-markdown'
import "./index.css"

export default function Teaching() {
  const [coursesContent, setContent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {

    fetch(coursesPath).then(resp => resp.text()).then(content => setContent(content)).catch(error => setError(error))

  }, [])


  return (
    <Section
      title="Teaching"
      id="teaching"
      className="section bg-primary text-light"
    >
      <div className="col-md-6 mx-auto lead">
        <ReactMarkdown>{coursesContent}</ReactMarkdown>
        {!!error && <span style={{color: "red"}}>Something went wrong. </span> }
      </div>
      <div className="col-md-4 mx-auto mr-3 text-center">
        <a
          href="https://reggienet.illinoisstate.edu"
          rel="noreferrer noopener"
          target="_blank"
          className="reggienet-btn btn btn-xl btn-round btn-light text-left mx-auto"
        >
          <p className="text-center">View and Submit Assignments via ReggieNet </p>

          <img alt="ReggieNet" className="regginet-logo" src={reggienet} />
        </a>
      </div>
      <div className="col-sm-12">
        <p className="text-center mt-4 pt-4 lead">{siteData.officeHoursText}</p>
      </div>
    </Section>
  );
}
