import React from 'react';
import defaultImg from '../../images/default-avatar-profile.jpg';

export default class Personal extends React.Component {
  render() {
    return (
      <div className="cv-personal">
        <div className="cv-name-photo">
          <p className="cv-name">First Name</p>
          <img className="photo" src={defaultImg} alt="user" />
          <p className="cv-name">Last Name</p>
        </div>
        <p className="cv-title">Professional Title</p>
        <p className="cv-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et nulla
          nec sem mollis accumsan at et sapien. Nam vitae lacinia ligula. Duis
          id libero in erat ultrices pellentesque. Vestibulum tincidunt libero
          quis mi elementum commodo. Suspendisse quis nulla ipsum. Ut aliquet
          urna eu odio tincidunt rutrum. Sed ornare feugiat ante, pretium varius
          lacus. Phasellus ultricies, massa ac lacinia gravida, ligula urna
          tristique dolor, ut bibendum enim ipsum sed est. Praesent semper
          convallis nisl, et consequat nulla luctus eu. Vivamus vestibulum
          ultricies lorem, in ullamcorper mauris finibus ut.
        </p>
      </div>
    );
  }
}
