import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import headshot from '../../../graphics/headshot.jpg';
import ilstuLogo from '../../../graphics/ilstu.png';
import siteData from '../../../siteData.json';
import { Link } from 'react-scroll';
/*

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
*/
export default function Masthead() {
  const linkProps = { spy: true, smooth: true, duration: 1000 };
  return (
    <>
      <Navbar expand="lg" className="bg-light-accent fixed-top">
        <Link className="navbar-brand" to="page-top" {...linkProps}>
          <div className="box">
            <img className="logo" alt="Illinois State University Logo" src={ilstuLogo} />
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" >

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

      <header className="section bg-primary text-white">
        <div className="container-fluid">
          <div className="row px-5">
            <div className="col-sm-6 offset-sm-1">
              <h1 className="header-title">Dawn M. McBride</h1>
              <h2 className="display-5">
                Professor of Psychology <br />
                <em>Illinois State University</em>
              </h2>
              <a
                className="btn btn-rounded btn-light btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={siteData.cvFileLink}
              >
                <i className="fas fa-arrow-circle-down fa-lg"></i>
                <span className="ml-2">Download Vitae</span>
              </a>
            </div>
            <div className="col-sm-5 text-center">
              <img
                src={headshot}
                alt="Headshot, Dr. Dawn McBride"
                className="rounded-circle headshot"
                style={{ width: 'inherit' }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
