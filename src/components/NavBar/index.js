import React from "react"
import Navbar from "react-bootstrap/Navbar"
import ilstuLogo from "../../images/ilstu.png"

import { Link } from "react-scroll"

export default function NavBar() {
  const linkProps = { spy: true, smooth: true, duration: 1000 }
  return (
    <Navbar expand="lg" className="bg-light-accent fixed-top">
      <Link className="navbar-brand" to="page-top" {...linkProps}>
        <div className="box">
          <img
            className="logo"
            alt="Illinois State University Logo"
            src={ilstuLogo}
          />
          <div className="text">
            <p className="lead">Dawn M. McBride, Ph.D </p>
            <p>
              Department of Psychology
              <br />
              Illinois State University
            </p>
          </div>
        </div>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i className="fa fa-bars"></i>
        <span className="responsive-only-label">Menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-3">
            <Link className="nav-link" to="about" {...linkProps}>
              About
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="teaching" {...linkProps}>
              Teaching
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="research" {...linkProps}>
              Research
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="books" {...linkProps}>
              Books
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="memory-lab" {...linkProps}>
              Memory Lab
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}
