import React from 'react';
import Contact from './Contact';
import Personal from './Personal';
import Career from './Career';
import Skills from './Skills';
import Education from './Education';

export default class CV extends React.Component {
  mapCareer = (arr, info) => {
    return arr.map((d, i) => <Career career={info.career[i]} key={i} />);
  };

  mapEducation = (arr, info) => {
    return arr.map((d, i) => (
      <Education education={info.education[i]} key={i} />
    ));
  };

  mapSkills = (arr, info) => {
    return arr.map((d, i) => <Skills skills={info.skills[i]} key={i} />);
  };

  render() {
    const { educationArr, careerArr, skillsArr, info } = this.props;
    let career = this.mapCareer([...careerArr], info);
    let education = this.mapEducation([...educationArr], info);
    let skills = this.mapSkills([...skillsArr], info);

    return (
      <div className="cv-wrapper">
        <div className="cv-display">
          <Personal personal={info.personal} />
          <div className="cv-grid">
            <div className="cv-career-wrapper">
              <h2>Career</h2>
              {career}
            </div>
            <Contact contact={info.personal} />
            <div className="cv-education-wrapper">
              <h2>Education</h2>
              {education}
            </div>
            <div className="cv-skills-wrapper">
              <h2>Skills</h2>
              {skills}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
