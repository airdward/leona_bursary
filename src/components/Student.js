import React, { useState, createRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const Student = ({ key, index, student, onChange, scholarId, onSelect }) => {
    let expanderBody = createRef();
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const modalToggle = () => setModal(!modal);
    const selectToggle = e => {
      onSelect(e);
      setModal(!modal);
    }

  
    const toggleExpander = e => {
      if (e.target.type === 'button') return;
  
      if (!isOpen) {
        toggle();
        }
        else {
        toggle();
      }
    }

    // isSelect will read some value from student, right?
    const isSelect = (student.id%2 ===0)
  
      return [
        <tr key="main" onClick={toggleExpander}>
          <td className="uk-text-nowrap">{index}.</td>
          <td>{student.name}</td>
          <td>{student.name}</td>
          <td><Button onClick={modalToggle} type='button' 
              style={isSelect? {backgroundColor:"#0B7527", border:"none"}:{backgroundColor:"#941216", border:"none"}}>
                {isSelect? "Select":"Cancel Selection" }</Button></td>
          <Modal isOpen={modal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>Are you sure?</ModalHeader>
            <ModalBody>
              {
                isSelect? 
                `Do you want to select student ${student.name}?`:`Do you want to cancel the selection of student ${student.name}?`
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={selectToggle} name={student.id}>Confirm</Button>{' '}
              <Button color="secondary" onClick={modalToggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          <td><Link to={`/students/${student.id}/${scholarId}`}><Button>View Details</Button></Link></td>
        </tr>,
      ];
  }

  export default Student;