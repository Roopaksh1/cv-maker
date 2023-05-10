import React from 'react';
import Form from './Form/Form';
import CV from './CV/CV';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      formInput: {
        personal: {},
        career: {},
        education: {},
        skills: {},
      },
    };
  }

  onChangePersonal = (e) => {};
  onChangeCareer = (e) => {};
  onChangeEducation = (e) => {};
  onChangeSkills = (e) => {};

  render() {
    return (
      <div className="main">
        <Form />
        <CV />
      </div>
    );
  }
}
