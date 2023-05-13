import React from 'react';

export default class Career extends React.Component {
  render() {
    const {
      to = 'Present',
      from = '2022',
      job = 'Job Title',
      company = 'Company Name',
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla nec sem mollis accumsan at et sapien. Nam vitae lacinia ligula. Duis Fid libero in erat ultrices pellentesque.',
    } = this.props.career;
    return (
      <div className="cv-career">
        <div className="job-duration">
          <p className="to">{to}</p>
          <p className="from">{from}</p>
        </div>
        <div className="cv-job">
          <div className="job-info">
            <p className="job-title">{job}</p>
            <p className="company-name">{company}</p>
          </div>
          <p className="job-desc">{description}</p>
        </div>
      </div>
    );
  }
}
