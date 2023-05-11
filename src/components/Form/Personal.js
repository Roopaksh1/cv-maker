import React from 'react';

export default class Personal extends React.Component {
  render() {
    const {onChangePersonal} = this.props;
    return (
      <div className="form-personal">
        <p className="input-wrapper">
          <input name="firstName" className="first-name-inp" placeholder="First Name" onInput={onChangePersonal}/>
          <label className="first-name">First Name</label>
        </p>
        <p className="input-wrapper">
          <input name="lastName" className="last-name-inp" placeholder="Last Name" onInput={onChangePersonal}/>
          <label className="last-name">Last Name</label>
        </p>
        <p className="input-wrapper">
          <label  className="photo-inp">Photo</label>
          <input name="photo" type="file" className="photo" accept="image/png, image/jpeg" onInput={onChangePersonal} />
        </p>
        <p className="input-wrapper">
          <input name="title" className="title-inp" placeholder="Professional Title" onInput={onChangePersonal}/>
          <label className="title">Professional Title</label>
        </p>
        <p className="input-wrapper">
          <input name="address" className="address-inp" placeholder="Address" onInput={onChangePersonal}/>
          <label className="address">Address</label>
        </p>
        <p className="input-wrapper">
          <input name="phone" type="tel" className="phone-inp" placeholder="Contact" onInput={onChangePersonal}/>
          <label className="phone">Contact</label>
        </p>
        <p className="input-wrapper">
          <input name="email" type="email" className="email-inp" placeholder="Email" onInput={onChangePersonal}/>
          <label className="email">Email</label>
        </p>
        <p className="input-wrapper">
          <textarea name="description" className="desc-inp" placeholder="Description" onInput={onChangePersonal}></textarea>
          <label className="desc">Description</label>
        </p>
      </div>
    );
  }
}
