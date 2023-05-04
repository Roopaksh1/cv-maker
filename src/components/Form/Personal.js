import React from "react";

export default class Personal extends React.Component{
  render() {
    return (
      <div className="form-personal">
        <p class="input-wrapper">
          <input id="first-name" placeholder="First Name"/>
          <label className="first-name">First Name</label>
        </p>
        <p class="input-wrapper">
          <input id="last-name" placeholder="Last Name"/>
          <label className="last-name">Last Name</label>
        </p>
        <p class="input-wrapper">
          <label className="photo">Photo</label>
          <input type="file" id="photo"/>
        </p>
        <p class="input-wrapper">
          <input id="title" placeholder="Professional Title"/>
          <label className="title">Professional Title</label>
        </p>
        <p class="input-wrapper">
          <input id="address" placeholder="Address"/>
          <label className="address">Address</label>
        </p>
        <p class="input-wrapper">
          <input type="tel" id="phone" placeholder="Contact"/>
          <label className="phone">Contact</label>
        </p>
        <p class="input-wrapper">
          <input type="email" id="email" placeholder="Email"/>
          <label className="email">Email</label>
        </p>
        <p class="input-wrapper">
          <textarea id="desc" placeholder="Description"></textarea>
          <label className="desc">Description</label>
        </p>
      </div>
    )
  }
}
