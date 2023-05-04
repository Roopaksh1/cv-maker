import React from "react";

export default class Skils extends React.Component{
  render () {
    return (
      <div className="form-skills">
        <p className="input-wrapper">
          <input className="skill-inp" placeholder="Skill" />
          <label className="skill">Skill</label>
        </p>
      </div>
    )
  }
}