import React from "react";
import Personal from "./Personal";
import Career from "./Career";

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
      </form>
    )
  }
}