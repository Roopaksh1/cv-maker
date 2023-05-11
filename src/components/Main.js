import React from 'react';
import Form from './Form/Form';
import CV from './CV/CV';

export default class Main extends React.Component {
  constructor() {
    super();
    this.onChangePersonal = this.onChangePersonal.bind(this);
    this.onChangeCareer = this.onChangeCareer.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.state = {
      personal: {},
      career: {},
      education: {},
      skills: {},
    };
  }

  onChangePersonal = (e) => {
    const { name, value } = e.target;
    if (name === 'photo') {
      this.handlePhoto(e);
    }
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };
  onChangeCareer = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };
  onChangeEducation = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };
  onChangeSkills = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };

  handlePhoto = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState((prevState) => ({
        personal: { ...prevState.personal, [name]: reader.result },
      }));
    };
  };

  render() {
    return (
      <div className="main">
        <Form onChangePersonal={this.onChangePersonal} />
        <CV info={this.state} />
      </div>
    );
  }
}
