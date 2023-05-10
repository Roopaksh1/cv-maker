import React from 'react';

export default class Career extends React.Component {
  render() {
    return (
      <div className="cv-career">
        <div className="job-duration">
          <p className="to">Present</p>
          <p className="from">2022</p>
        </div>
        <div className="cv-job">
          <div className="job-info">
            <p className="job-title">Job Title</p>
            <p className="company-name">Company Name</p>
          </div>
          <p className="job-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla
            nec sem mollis accumsan at et sapien. Nam vitae lacinia ligula. Duis
            id libero in erat ultrices pellentesque.
          </p>
        </div>
      </div>
    );
  }
}
