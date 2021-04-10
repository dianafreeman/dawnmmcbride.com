import React from "react"
import headshot from "../../images/headshot.jpg"
import { useStaticQuery, graphql } from "gatsby"

export default function Masthead() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactInfo {
            cvLink
          }
        }
      }
    }
  `)
  return (
    <header className="section bg-primary text-white">
      <div className="container-fluid">
        <div className="row px-5">
          <div className="col-sm-6 offset-sm-1">
            <h1 className="header-title">Dawn M. McBride</h1>
            <h2 className="display-5 small text-light">
              Professor of Psychology <br />
              <em>Illinois State University</em>
            </h2>
            <a
              href={data.site.siteMetadata.contactInfo.cvLink}
              className="btn btn-rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-arrow-circle-down fa-lg"></i>
              <p className="ml-2 mb-0" style={{ fontSize: 16 }}>
                Download Vitae
              </p>
            </a>
          </div>
          <div className="col-sm-5 text-center">
            <img
              src={headshot}
              alt="Headshot, Dr. Dawn McBride"
              className="rounded-circle headshot"
              style={{ width: "inherit" }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
