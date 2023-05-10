import React from 'react';

export default class Education extends React.Component {
  render() {
    return (
      <div className="cv-education">
        <div class="university-info">
          <p className="cv-university">University</p>
          <p className="cv-course">Course</p>
          <p className="cv-subject">Subject</p>
        </div>
        <div className="education-duration">
          <span className="to">Present -</span>
          <span className="from"> 2022</span>
        </div>
      </div>
    );
  }
}
