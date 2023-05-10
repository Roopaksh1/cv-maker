import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="cv-contact">
        <div className="cv-address">
          <i class="fa-solid fa-location-dot"></i>
          <p>Address</p>
        </div>
        <div className="cv-phone">
          <i class="fa-solid fa-phone"></i>
          <p>1234567890</p>
        </div>
        <div className="cv-email">
          <i class="fa-solid fa-envelope"></i>
          <p>abc@gmail.com</p>
        </div>
      </div>
    );
  }
}
