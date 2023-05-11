import React from 'react';

export default class Contact extends React.Component {
  render() {
    const {address='Address', phone='1234567890', email='abc@gmail.com'} = this.props.contact;
    return (
      <div className="cv-contact">
        <div className="cv-address">
          <i className="fa-solid fa-location-dot"></i>
          <p>{address}</p>
        </div>
        <div className="cv-phone">
          <i className="fa-solid fa-phone"></i>
          <p>{phone}</p>
        </div>
        <div className="cv-email">
          <i className="fa-solid fa-envelope"></i>
          <p>{email}</p>
        </div>
      </div>
    );
  }
}
