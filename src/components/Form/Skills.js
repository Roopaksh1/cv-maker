import React from 'react';
import Button from '../../shared/Button';

export default class Skills extends React.Component {
  render() {
    const { onDelete, index, onChangeSkills } = this.props;
    return (
      <div className="form-skills">
        <p className="input-wrapper">
          <input
            name="skill"
            className="skill-inp"
            placeholder="Skill"
            onInput={(e) => onChangeSkills(e, index)}
          />
          <label className="skill">Skill</label>
        </p>
        <Button onDelete={onDelete} index={index} />
      </div>
    );
  }
}
