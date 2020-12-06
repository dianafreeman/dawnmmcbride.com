import React from 'react';
import headshot from '../../../graphics/headshot.jpg'
import ilstuLogo from '../../../graphics/ilstu.png'
import siteData from '../../../siteData.json';

export default function Masthead() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light-accent fixed-top" id="mainNav">
        <div className="container-fluid">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <div className="box">
              <img className="logo" alt="Illinois State University Logo" src={ilstuLogo} />
              <div className="text">
                <p className="lead">Dawn M. McBride, Ph.D </p>
                <p className="small">
                  Department of Psychology
                  <br />
                  Illinois State University
                </p>
              </div>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
            <span className="responsive-only-label">Menu</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-3">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link js-scroll-trigger" href="#teaching">
                  Teaching
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link js-scroll-trigger" href="#research">
                  Research
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link js-scroll-trigger" href="#books">
                  Books
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link js-scroll-trigger" href="#memory-lab">
                  Memory Lab
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
              <img src={headshot} alt="Headshot, Dr. Dawn McBride" className="rounded-circle headshot" style={{ width: 'inherit' }} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
