import React from "react";

export default class Skills extends React.Component {
  render() {
    const { skill='Skill' } = this.props.skills
    return (
      <div className="cv-skills">
        <p>{skill}</p>
      </div>
    )
  }
}