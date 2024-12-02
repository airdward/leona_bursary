import React from "react";
import "./content.css"
import { Button } from 'reactstrap';
import { GiNewspaper } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';
import { AiOutlineBank } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Main = ()=>{
  const iconStyle={
    margin:'10px',
    width:'50px',
    height:'50px',
  }
  return (
    <div className="img">
    
      <div style={{textAlign: 'left', position: 'relative', left: '250px', top: '100px' }}>
      <hr style={{ textAlign: 'left', width: '130px', border: '3px solid black', marginLeft: '0px'}}></hr>
      <h2><strong>Scholarship Integrated Management System</strong></h2>
      <h7>Welcome to the Online Bursary Award System.<br/>Conveniently obtain scholarship information and apply quickly!</h7>
      </div>
      <br/><br/><br/>
      <div className="content">
        <div className="row"></div>
        <Link to="/addScholar"><Button className="RegisterMainButton" size="lg">Scholarship Registration<br/><GiNewspaper style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/selections"><Button className="RegisterMainButton" size="lg" color="warning">Scholarship Recipient Selection<br/><FaSearch style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/main"><Button className="RegisterMainButton" size="lg" color="info">Site Usage Guide<br/><GoQuestion style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/"><Button className="RegisterMainButton" size="lg" color="success">Move to Student Page<br/><AiOutlineBank style={iconStyle}/></Button></Link>
      </div>
    </div>
);
   
   
}

export default Main;


 /**/