import React from "react";
import Career from "./Career";
import Personal from "./Personal";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";

export default class CV extends React.Component {
  render() {
    return (
      <div className="cv-wrapper">
        <div className="cv-display">
          <Personal />
          <div class="cv-grid">
            <div class="cv-career-wrapper">
              <h2>Career</h2>
              <Career />
            </div>
            <Contact />
            <div class="cv-education-wrapper">
              <h2>Education</h2>
              <Education />
            </div>
            <div class="cv-skills-wrapper">
              <h2>Skills</h2>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    )
  }
}