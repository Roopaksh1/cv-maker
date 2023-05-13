import React from 'react';
import Button from '../../shared/Button';

export default class Education extends React.Component {
  render() {
    const { onDelete, index, onChangeEducation } = this.props;
    return (
      <div className="form-education">
        <p className="input-wrapper">
          <input name='university' className="university-inp" placeholder="University" onChange={(e) => onChangeEducation(e, index)} />
          <label className="university">University</label>
        </p>
        <p className="input-wrapper">
          <input name='course' className="course-inp" placeholder="Course" onChange={(e) => onChangeEducation(e, index)} />
          <label className="course">Course</label>
        </p>
        <p className="input-wrapper">
          <input name='subject' className="subject-inp" placeholder="Subject" onChange={(e) => onChangeEducation(e, index)} />
          <label className="subject-inp">Subject</label>
        </p>
        <p className="input-wrapper">
          <input
            type="number"
            name='from'
            step={1}
            min={1900}
            max={2099}
            className="from-inp"
            placeholder="From"
            onChange={(e) => onChangeEducation(e, index)}
          />
          <label className="from">From</label>
        </p>
        <p className="input-wrapper">
          <input
            type="number"
            name='to'
            step={1}
            min={1900}
            max={2099}
            className="to-inp"
            placeholder="To"
            onChange={(e) => onChangeEducation(e, index)}
          />
          <label className="from">To</label>
        </p>
        <Button onDelete={onDelete} index={index} />
      </div>
    );
  }
}
