import React from 'react';

export default class Education extends React.Component {
  render() {
    const {
      university = 'University',
      course = 'Course',
      subject = 'Subject',
      to = 'Present',
      from = '2022',
    } = this.props.education;
    return (
      <div className="cv-education">
        <div className="university-info">
          <p className="cv-university">{university}</p>
          <p className="cv-course">{course}</p>
          <p className="cv-subject">{subject}</p>
        </div>
        <div className="education-duration">
          <span className="to">{to} -</span>
          <span className="from"> {from}</span>
        </div>
      </div>
    );
  }
}
