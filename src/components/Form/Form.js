import React from "react";
import Personal from "./Personal";

export default class Form extends React.Component{
  render () {
    return (
      <form className="form">
        <fieldset>
          <legend>Personal Details</legend>
          <Personal />
        </fieldset>
      </form>
    )
  }
}