import React from 'react';
import defaultImg from '../../images/default-avatar-profile.jpg';

export default class Personal extends React.Component {
  render() {
    const {
      firstName = 'First Name',
      lastName = 'Last Name',
      photo,
      title = 'Professional Title',
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla nec sem mollis accumsan at et sapien. Nam vitae lacinia ligula. Duis',
    } = this.props.personal;
    let pic;
    if (photo) {
      pic = <img className="photo" src={photo} alt="user" />;
    } else {
      pic = <img className="photo" src={defaultImg} alt="user" />;
    }
    return (
      <div className="cv-personal">
        <div className="cv-name-photo">
          <p className="cv-name">{firstName}</p>
          {pic}
          <p className="cv-name">{lastName}</p>
        </div>
        <p className="cv-title">{title}</p>
        <p className="cv-desc">{description}</p>
      </div>
    );
  }
}
