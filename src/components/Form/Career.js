import React from 'react';

export default class Career extends React.Component {
  render() {
    return (
      <div className="form-career">
        <p className="input-wrapper">
          <input id="job" placeholder="Job Title" />
          <label className="job">Job Title</label>
        </p>
        <p className="input-wrapper">
          <input id="company" placeholder="Company" />
          <label className="company">Company</label>
        </p>
        <p className="input-wrapper">
          <input id="" placeholder="Professional Title" />
          <label className="title">Professional Title</label>
        </p>
        <p className="input-wrapper">
          <input type='number' step={1} min={1900} max={2099} id="from" placeholder="From" />
          <label className="from">From</label>
        </p>
        <p className="input-wrapper">
          <input type='number' step={1} min={1900} max={2099} id="to" placeholder="To" />
          <label className="from">To</label>
        </p>
        <p className="input-wrapper">
          <textarea id="desc" placeholder="Description"></textarea>
          <label className="desc">Description</label>
        </p>
      </div>
    );
  }
}
