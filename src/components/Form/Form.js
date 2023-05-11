import React from 'react';
import Personal from './Personal';
import Career from './Career';
import Education from './Education';
import Skills from './Skills';
import Button from '../../shared/Button';

export default class Form extends React.Component {
  constructor() {
    super();
    this.addSkill = this.addSkill.bind(this);
    this.addCareer = this.addCareer.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.deleteCareer = this.deleteCareer.bind(this);

    this.state = {
      skills: [<Skills onDelete={this.deleteSkill} key={0} index={0} />],
      education: [
        <Education onDelete={this.deleteEducation} key={0} index={0} />,
      ],
      career: [<Career onDelete={this.deleteCareer} key={0} index={0} />],
    };
  }

  addSkill = () => {
    let arr = [...this.state.skills];
    arr.push(<Skills onDelete={this.deleteSkill} />);
    arr = arr.map((d, i) => {
      return <Skills onDelete={this.deleteSkill} key={i} index={i} />;
    });
    this.setState({
      skills: arr,
    });
  };

  addEducation = () => {
    let arr = [...this.state.education];
    arr.push(<Education onDelete={this.deleteEducation} />);
    arr = arr.map((d, i) => {
      return <Education onDelete={this.deleteEducation} key={i} index={i} />;
    });
    this.setState({
      education: arr,
    });
  };

  addCareer = () => {
    let arr = [...this.state.career];
    arr.push(<Career onDelete={this.deleteCareer} />);
    arr = arr.map((d, i) => {
      return <Career onDelete={this.deleteCareer} key={i} index={i} />;
    });
    this.setState({
      career: arr,
    });
  };

  deleteSkill = (i) => {
    let index = Number(i);
    let arr = [...this.state.skills];
    arr = arr.filter((d, i) => i !== index);
    arr = arr.map((d, i) => {
      return <Skills onDelete={this.deleteSkill} key={i} index={i} />;
    });
    this.setState({
      skills: arr,
    });
  };

  deleteEducation = (i) => {
    let index = Number(i);
    let arr = [...this.state.education];
    arr = arr.filter((d, i) => i !== index);
    arr = arr.map((d, i) => {
      return <Education onDelete={this.deleteEducation} key={i} index={i} />;
    });
    this.setState({
      education: arr,
    });
  };

  deleteCareer = (i) => {
    let index = Number(i);
    let arr = [...this.state.career];
    arr = arr.filter((d, i) => i !== index);
    arr = arr.map((d, i) => {
      return <Career onDelete={this.deleteCareer} key={i} index={i} />;
    });
    this.setState({
      career: arr,
    });
  };

  render() {
    const {onChangePersonal, onChangeEducation, onChangeCareer, onChangeSkills} = this.props;
    return (
      <form className="form">
        <fieldset>
          <legend>Personal Details</legend>
          <Personal onChangePersonal={onChangePersonal}/>
        </fieldset>
        <fieldset>
          <legend>Career</legend>
          {this.state.career}
          <Button buttonType={1} onAdd={this.addCareer} />
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          {this.state.education}
          <Button buttonType={1} onAdd={this.addEducation} />
        </fieldset>
        <fieldset>
          <legend>Skills</legend>
          {this.state.skills}
          <Button buttonType={1} onAdd={this.addSkill} />
        </fieldset>
      </form>
    );
  }
}
