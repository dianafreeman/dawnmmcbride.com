import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../components/style/App.css"

import Seo from "../components/seo"

import NavBar from "../components/NavBar"
import MemoryLab from "../components/Sections/MemoryLab"
import Books from "../components/Sections/Books"
import Teaching from "../components/Sections/Teaching"
import About from "../components/Sections/About"
import Research from "../components/Sections/Research"
import Masthead from "../components/Masthead"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contactInfo {
            address
          }
        }
      }
    }
  `)
  return (
    <footer className="bg-dark container-fluid">
      <div className="col-sm-12">
        <div className="col-sm-10 mx-auto">
          <p className="text-center text-white">
            <em className="muted"> All Rights Reserved </em>
            &copy; 2019 | Dawn M. McBride, Ph.D
          </p>
          <p className="text-center text-white">
            {data.site.siteMetadata.contactInfo.address}
          </p>
        </div>
      </div>
    </footer>
  )
}

const IndexPage = () => (
  <main id="page-top">
    <Seo />
    <NavBar />
    <Masthead />
    <hr className="bg-primary-accent" />
    <About />
    <hr className="bg-dark-accent" />
    <Teaching />
    <hr className="bg-primary-accent" />
    <Research />
    <hr className="bg-dark-accent" />
    <Books />
    <hr className="bg-primary-accent" />
    <MemoryLab />
    <hr className="bg-dark-accent" />
    <Footer />
  </main>
)

export default IndexPage
