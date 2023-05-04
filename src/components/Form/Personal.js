import React from 'react';

export default class Personal extends React.Component {
  render() {
    return (
      <div className="form-personal">
        <p className="input-wrapper">
          <input className="first-name-inp" placeholder="First Name" />
          <label className="first-name">First Name</label>
        </p>
        <p className="input-wrapper">
          <input className="last-name-inp" placeholder="Last Name" />
          <label className="last-name">Last Name</label>
        </p>
        <p className="input-wrapper">
          <label className="photo-inp">Photo</label>
          <input type="file" className="photo" />
        </p>
        <p className="input-wrapper">
          <input className="title-inp" placeholder="Professional Title" />
          <label className="title">Professional Title</label>
        </p>
        <p className="input-wrapper">
          <input className="address-inp" placeholder="Address" />
          <label className="address">Address</label>
        </p>
        <p className="input-wrapper">
          <input type="tel" className="phone-inp" placeholder="Contact" />
          <label className="phone">Contact</label>
        </p>
        <p className="input-wrapper">
          <input type="email" className="email-inp" placeholder="Email" />
          <label className="email">Email</label>
        </p>
        <p className="input-wrapper">
          <textarea className="desc-inp" placeholder="Description"></textarea>
          <label className="desc">Description</label>
        </p>
      </div>
    );
  }
}
