import React from 'react';
import Button from '../../shared/Button';

export default class Career extends React.Component {
  render() {
    const { onDelete, index, onChangeCareer } = this.props;
    return (
      <div className="form-career">
        <p className="input-wrapper">
          <input
            name="job"
            className="job-inp"
            placeholder="Job Title"
            onInput={(e) => onChangeCareer(e, index)}
          />
          <label className="job">Job Title</label>
        </p>
        <p className="input-wrapper">
          <input
            name="company"
            className="company-inp"
            placeholder="Company"
            onInput={(e) => onChangeCareer(e, index)}
          />
          <label className="company">Company</label>
        </p>
        <p className="input-wrapper">
          <input
            type="number"
            name="from"
            step={1}
            min={1900}
            max={2099}
            className="from-inp"
            placeholder="From"
            onInput={(e) => onChangeCareer(e, index)}
          />
          <label className="from">From</label>
        </p>
        <p className="input-wrapper">
          <input
            type="number"
            name="to"
            step={1}
            min={1900}
            max={2099}
            className="to-inp"
            placeholder="To"
            onInput={(e) => onChangeCareer(e, index)}
          />
          <label className="from">To</label>
        </p>
        <p className="input-wrapper">
          <textarea
            name="description"
            className="desc-inp"
            placeholder="Description"
            onInput={(e) => onChangeCareer(e, index)}
          ></textarea>
          <label className="desc">Description</label>
        </p>
        <Button onDelete={onDelete} index={index} />
      </div>
    );
  }
}
