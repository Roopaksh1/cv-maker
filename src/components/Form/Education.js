import React from "react";

export default class Education extends React.Component{
  render () {
    return (
      <div className="form-education">
        <p className="input-wrapper">
          <input className="university-inp" placeholder="University" />
          <label className="university">University</label>
        </p>
        <p className="input-wrapper">
          <input className="course-inp" placeholder="Course" />
          <label className="course">Course</label>
        </p>
        <p className="input-wrapper">
          <input className="subject-inp" placeholder="Subject"></input>
          <label className="subject-inp">Subject</label>
        </p>
        <p className="input-wrapper">
          <input type='number' step={1} min={1900} max={2099} className="from-inp" placeholder="From" />
          <label className="from">From</label>
        </p>
        <p className="input-wrapper">
          <input type='number' step={1} min={1900} max={2099} className="to-inp" placeholder="To" />
          <label className="from">To</label>
        </p>
      </div>
    )
  }
}