import React from 'react';
import Form from './Form/Form';
import CV from './CV/CV';
import Career from './CV/Career';
import Education from './CV/Education';
import Skills from './CV/Skills';
import { jsPDF } from "jspdf";

export default class Main extends React.Component {
  constructor() {
    super();
    this.onChangePersonal = this.onChangePersonal.bind(this);
    this.onChangeCareer = this.onChangeCareer.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onAddCareer = this.onAddCareer.bind(this);
    this.onAddEducation = this.onAddEducation.bind(this);
    this.onAddSkills = this.onAddSkills.bind(this);
    this.onDeleteCareer = this.onDeleteCareer.bind(this);
    this.onDeleteEducation = this.onDeleteEducation.bind(this);
    this.onDeleteSkills = this.onDeleteSkills.bind(this);
    this.state = {
      personal: {},
      career: [0],
      education: [0],
      skills: [0],
    };
    this.careerArr = [<Career key={0} />];
    this.educationArr = [<Education key={0} />];
    this.skillsArr = [<Skills key={0} />];
  }

  onAddCareer = () => {
    this.careerArr.push(<Career />);
    let arr = this.state.career;
    arr.push(0);
    this.setState({
      career: arr,
    });
  };

  onAddEducation = () => {
    this.educationArr.push(<Education />);
    let arr = this.state.education;
    arr.push(0);
    this.setState({
      education: arr,
    });
  };

  onAddSkills = () => {
    this.skillsArr.push(<Skills />);
    let arr = this.state.skills;
    arr.push(0);
    this.setState({
      skills: arr,
    });
  };

  onDeleteCareer = (index) => {
    this.careerArr = this.careerArr.filter((d, i) => i !== index);
    let arr = this.state.career;
    arr = arr.filter((d, i) => i !== index);
    this.setState({
      career: arr,
    });
  };

  onDeleteEducation = (index) => {
    this.educationArr = this.educationArr.filter((d, i) => i !== index);
    let arr = this.state.education;
    arr = arr.filter((d, i) => i !== index);
    this.setState({
      education: arr,
    });
  };

  onDeleteSkills = (index) => {
    this.skillsArr = this.skillsArr.filter((d, i) => i !== index);
    let arr = this.state.skills;
    arr = arr.filter((d, i) => i !== index);
    this.setState({
      skills: arr,
    });
  };

  onChangePersonal = (e) => {
    const { name, value } = e.target;
    if (name === 'photo') {
      this.handlePhoto(e);
    }
    this.setState((prevState) => ({
      personal: { ...prevState.personal, [name]: value },
    }));
  };
  onChangeCareer = (e, index) => {
    const { name, value } = e.target;
    let arr = this.state.career;
    arr[index] = { ...arr[index], [name]: value };
    this.setState({
      career: arr,
    });
  };
  onChangeEducation = (e, index) => {
    const { name, value } = e.target;
    let arr = this.state.education;
    arr[index] = { ...arr[index], [name]: value };
    this.setState({
      education: arr,
    });
  };
  onChangeSkills = (e, index) => {
    const { name, value } = e.target;
    let arr = this.state.skills;
    arr[index] = { ...arr[index], [name]: value };
    this.setState({
      skills: arr,
    });
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

  generatePDF = () => {
    const doc = new jsPDF();
    const element = document.querySelector('.cv-wrapper');
    doc.html(element, {
      callback: function(doc) {
        doc.save('CV.pdf');
      },x: 6,
      y: 8,
      html2canvas: { scale: 0.25 },
    })
  }

  render() {
    return (
      <div className="main">
        <Form
          onChangePersonal={this.onChangePersonal}
          onChangeCareer={this.onChangeCareer}
          onChangeEducation={this.onChangeEducation}
          onChangeSkills={this.onChangeSkills}
          onAddCareer={this.onAddCareer}
          onAddEducation={this.onAddEducation}
          onAddSkills={this.onAddSkills}
          onDeleteCareer={this.onDeleteCareer}
          onDeleteEducation={this.onDeleteEducation}
          onDeleteSkills={this.onDeleteSkills}
        />
        <button className='pdf-button' onClick={this.generatePDF}>Download As PDF</button>
        <CV
          info={this.state}
          personalArr={this.personalArr}
          careerArr={this.careerArr}
          educationArr={this.educationArr}
          skillsArr={this.skillsArr}
        />
      </div>
    );
  }
}
