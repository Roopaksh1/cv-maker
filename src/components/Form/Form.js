import React from "react";
import Personal from "./Personal";
import Career from "./Career";
import Education from "./Education";
import Skils from "./Skills";

export default class Form extends React.Component{
  render () {
    return (
      <form className="form">
        <fieldset>
          <legend>Personal Details</legend>
          <Personal />
        </fieldset>
        <fieldset>
          <legend>Career</legend>
          <Career />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <Education />
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          <Skils />
        </fieldset>
      </form>
    )
  }
}