import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const FormComponent = ({ onChange, content, onPublish, onCancel, originalScholar }) => {

    const style={
        marginTop: '3%',
        marginLeft:'10%',
        marginRight: '10%',
        marginBottom: '5%',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingTop:  '3%',
        paddingBottom: '3%',
        alignContent: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: '25px'
    }
    
  return (
    <div style={style} >
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={{textAlign: 'center'}}>
        <h2 ><strong>Scholarship Registration</strong></h2>
        <hr style={{border: 'solid 1px gray'}}/>
    </div>
    <Form>
      <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
        <Label for="scholarName" xs="auto"><strong>Scholarship Name</strong></Label>
        <Col xs={4}>
        <Input onChange={onChange} type="text" name="scholarName" id="scholarName" placeholder="Enter scholarship name" value={originalScholar? originalScholar.title:null}/>
      </Col>
        <Col xs={1}/>
        <Col xs={4}>
        <Label for="File" ><strong>Attachment</strong></Label>
        <Input onChange={onChange} type="file" name="file" id="file" />
        <FormText color="muted">
          You can add one attachment file.
        </FormText>
        </Col>
      </FormGroup>
      
      <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
                <Label xs="auto" for="startDate" ><strong>Start Date&nbsp;&nbsp;&nbsp;</strong></Label>
                <Col xs={4}>
                <Input  onChange={onChange} type="date" name="startDate" id="startDate" placeholder="Select start date" value={originalScholar? originalScholar.createdAt:null} />
                </Col>
                <Col xs={1}/>
                <Label for="dueDate" xs="auto" ><strong>Deadline</strong></Label>
                <Col xs={4}> <Input onChange={onChange} type="date" name="dueDate" id="dueDate" placeholder="Select deadline" value={originalScholar? originalScholar.updatedAt:null} /></Col>
      </FormGroup>
      
        <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
            <Label for="sum" xs="auto" ><strong>Grant Amount&nbsp;&nbsp;&nbsp;</strong></Label>
            <Col xs={4}>
            <Input onChange={onChange} type="number" name="sum" id="sum" placeholder="Leave blank for full scholarship" value={originalScholar? originalScholar.title:null}/>
            </Col>
            <Col xs={1}/>
            <Label for="numberOfPeople"xs="auto" ><strong>Number of Recruitments</strong></Label>
           <Col xs={4}> <Input onChange={onChange} type="number" name="numberOfPeople" id="numberOfPeople" placeholder="Enter number of people" value={originalScholar? originalScholar.id:null}/>
          </Col>
        </FormGroup>
        
      <FormGroup style={{marginBottom: '6%', marginTop: '6%'}}>
        <Row>
            <Label for="semester" xs="auto" ><strong>Semester Limit&nbsp;&nbsp;&nbsp;</strong></Label>
            <Col xs={4}>
                <Input onChange={onChange} type="number" name="startSemester" id="startSemester" placeholder="Start semester"  value={originalScholar? originalScholar.id:null}/>
            </Col>
            <Col xs={1}/>&nbsp;&nbsp;
            <Col xs={5}>
                <Input onChange={onChange} type="number" name="endSemester" id="endSemester" placeholder="End semester"  value={originalScholar? originalScholar.id:null}/>
            </Col>
        </Row>
        <FormText color="muted">
            If no semester is entered, it will be registered without restrictions.
        </FormText>
      </FormGroup>
     
      <div style={{textAlign: 'center'}}>
      <hr style={{border: 'solid 1px gray'}}/>
      <Button color="success"onClick={onPublish}>Register</Button>&nbsp;&nbsp;
      <Button onClick={onCancel}>Cancel</Button></div>
    </Form>
    </div>
  );
}

export default FormComponent;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;