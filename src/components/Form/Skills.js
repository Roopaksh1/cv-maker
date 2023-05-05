import React from 'react';
import Button from '../../shared/Button';

export default class Skills extends React.Component {
  render() {
    const { onDelete, index } = this.props;
    return (
      <div className="form-skills">
        <p className="input-wrapper">
          <input className="skill-inp" placeholder="Skill" />
          <label className="skill">Skill</label>
        </p>
        <Button onDelete={onDelete} index={index} />
      </div>
    );
  }
}
