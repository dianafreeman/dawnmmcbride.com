import React from 'react'
import reggienet from '../../../graphics/reggienet.png';
import Section from '..'
import siteData from '../../../siteData.json'

export default function Teaching() {
  return (
    <Section title="Teaching" id="teaching" className="section bg-primary text-light">
      <div class="col-md-6 mx-auto">
        <p class="lead">
          <strong>Fall 2020</strong>
        </p>
        <p class="lead">
          PSY 111: Introduction to Psychology
          <br />
          PSY 253: Cognition &amp; Learning
          <br />
          PSY 368: Human Memory
        </p>
        <br />
        <p class="lead">
          <strong>Spring 2021</strong>
        </p>
        <p class="lead">PSY 231: Research Methods in Psychology</p>
      </div>
      <div class="col-md-4 mx-auto mr-3 text-center">
        <a
          href="https://reggienet.illinoisstate.edu"
          rel="noreferrer noopener"
          target="_blank"
          class="reggienet-btn btn btn-xl btn-round btn-light text-left mx-auto"
        >
          <p class="text-center">View and Submit Assignments via ReggieNet </p>

          <img alt="ReggieNet" class="regginet-logo" src={reggienet} />
        </a>
      </div>
      <div className="col-sm-12">
        <p class="text-center mt-4 pt-4 lead">{siteData.officeHoursText}</p>
      </div>
    </Section>
  );
}
