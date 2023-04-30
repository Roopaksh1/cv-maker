import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        Copyright &copy; 2022 Roopaksh{' '}
        <a href="https://github.com/Roopaksh1" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github fa-lg"></i>
        </a>
      </div>
    );
  }
}
