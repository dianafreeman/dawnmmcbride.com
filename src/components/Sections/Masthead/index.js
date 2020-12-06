import React from 'react';
import headshot from '../../../graphics/headshot.jpg'
import ilstuLogo from '../../../graphics/ilstu.png'
import siteData from '../../../siteData.json';

export default function Masthead() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light-accent fixed-top" id="mainNav">
        <div class="container-fluid">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <div class="box">
              <img class="logo" src={ilstuLogo} />
              <div class="text">
                <p class="lead">Dawn M. McBride, Ph.D </p>
                <p class="small">
                  Department of Psychology
                  <br />
                  Illinois State University
                </p>
              </div>
            </div>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa fa-bars"></i>
            <span class="responsive-only-label">Menu</span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item mx-3">
                <a class="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link js-scroll-trigger" href="#teaching">
                  Teaching
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link js-scroll-trigger" href="#research">
                  Research
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link js-scroll-trigger" href="#books">
                  Books
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link js-scroll-trigger" href="#memory-lab">
                  Memory Lab
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="section bg-primary text-white">
        <div class="container-fluid">
          <div class="row px-5">
            <div class="col-sm-6 offset-sm-1">
              <h1 class="header-title">Dawn M. McBride</h1>
              <h2 class="display-5">
                Professor of Psychology <br />
                <em>Illinois State University</em>
              </h2>
              <a
                class="btn btn-rounded btn-light btn-light"
                target="_blank"
                rel="noopener noreferrer"
                href={siteData.cvFileLink}
              >
                <i class="fas fa-arrow-circle-down fa-lg"></i>
                <span class="ml-2">Download Vitae</span>
              </a>
            </div>
            <div class="col-sm-5 text-center">
              <img src={headshot} class="rounded-circle headshot" style={{ width: 'inherit' }} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
