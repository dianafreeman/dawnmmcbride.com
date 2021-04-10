import React from "react"
import reggienet from "../../../images/reggienet.png"
import Section from ".."
import siteData from "../../../content/contactInfo.json"
import { useStaticQuery, graphql } from "gatsby"
import "./index.css"
// DATA

export default function Teaching() {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { label: { eq: "courses-display" } }) {
        id
        html
      }
    }
  `)
  debugger
  return (
    <Section
      title="Teaching"
      id="teaching"
      className="section bg-primary text-light"
    >
      <div
        className="col-md-6 mx-auto lead"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html || "" }}
      ></div>
      <div className="col-md-4 mx-auto mr-3 text-center">
        <a
          href="https://reggienet.illinoisstate.edu"
          rel="noreferrer noopener"
          target="_blank"
          className="reggienet-btn btn btn-xl btn-round btn-light text-left mx-auto"
        >
          <p className="text-center">
            View and Submit Assignments via ReggieNet{" "}
          </p>

          <img alt="ReggieNet" className="regginet-logo" src={reggienet} />
        </a>
      </div>
      <div className="col-sm-12">
        <p className="text-center mt-4 pt-4 lead">{siteData.officeHours}</p>
      </div>
    </Section>
  )
}
