import React from "react";
import Section from "../index";

const AboutDescription = `My research interests are in human memory broadly and forgetting, prospective memory, false memory, and task choices more specifically. My teaching interests/experience includes introductory psychology, research methods and statistics, cognition and learning, and human memory.`;
export default function About() {
  return (
    <Section
      title="About"
      id="about"
      className="section bg-light-accent"
      description={AboutDescription}
    >
      <div className="col-sm-5 mx-auto ml-3 about-sub-section">
        <div className="bg-light rounded-corners">
          <h3 className="display-5 about-subhead">Teaching Interests</h3>
          <ul>
            <li>Research Methods</li>
            <li>Introductory Psychology</li>
            <li>Cognition and Learning</li>
            <li>Statistics</li>
            <li>Memory</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-5 mx-auto mr-3 about-sub-section">
        <div className="bg-light rounded-corners">
          <h3 className="display-5 about-subhead">Research Interests</h3>

          <ul>
            <li>Cognitive Task Choices</li>
            <li>Prospective Memory</li>
            <li>False Memory</li>
            <li>Forgetting</li>
            <li>Implicit Memory</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
