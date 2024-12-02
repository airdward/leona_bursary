import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Checkbox } from 'antd';
import "./content.css"

const SignUp = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset')
  }

  const onSubmit = (e) => {
    e.preventDefault();
    /*Validation logic
    1. Verify when password and password check are different
    2. Confirm terms agreement.
    */
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      name,
      password,
      passwordCheck,
      term
    });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordChk = (e) => { // Function to verify password each time it's entered
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.vlue);
  };

  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} style={{padding:100}}>
        <FormGroup row>
          <Label htmlFor="user-name" sm={2}>Organization Name</Label>
          <Col sm={10}>
            <Input placeholder="Enter exact organization name" name="user-name" value={name} required onChange={onChangeName} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="user-id" sm={2}>ID</Label>
          <Col sm={8}>
            <Input name="user-id" value={id} required onChange={onChangeId}/>
          </Col>
          <Col sm={2}><Button type="primary" htmltype="/">Check Duplicate</Button></Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="user-password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="user-password-check" sm={2}>Confirm Password</Label>
          <Col sm={10}>
            <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
            {passwordError && <div style={{color : 'red'}}>Passwords do not match.</div>}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label htmlFor="//" sm={2}>Business Registration Certificate</Label>
          <Col sm={10}>
            <Input type="file" onChange={uploadImage} name="file" placeholder="Upload an image"/>
            <FormText color="muted">
              Please scan and submit the foundation's business certificate. It will be used for review.
            </FormText>
          </Col>
        </FormGroup>

        <div className="center-col">
          
          Terms of Service 
        </div>

        <div className="signupbuttons">
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>I agree.</Checkbox>
          {termError && <div style={{color : 'red'}}>You must agree to the terms.</div>}
        </div>

        <div className="signupbuttons" style={{marginTop:10}}>
          <Button size="lg" type="primary" htmltype="/">Cancel</Button>&nbsp;&nbsp;&nbsp;
          <Button size="lg" type="primary" htmltype="submit">Sign Up</Button>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;