import React from 'react';

export default class Button extends React.Component {
  render() {
    // buttonType === 0 for delete
    const { buttonType, onAdd, onDelete, index } = this.props;
    let button;
    if (buttonType) {
      button = (
        <button className="add-btn" type="button" onClick={onAdd}>
          Add
        </button>
      );
    } else {
      button = (
        <button
          className="delete-btn"
          type="button"
          index={index}
          onClick={(e) => onDelete(e.target.getAttribute('index'))}
        >
          Delete
        </button>
      );
    }

    return button;
  }
}
