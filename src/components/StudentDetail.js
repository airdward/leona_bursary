import React from 'react'
import { Container, Row, Col, Button, Badge, Table } from 'reactstrap';
import { Link } from "react-router-dom"

const StudentDetail = ({ student, loading, scholarId }) => {
    
    if(loading || !student){
        return null;
    }

    const titleStyle = {
        fontSize: '25px',
        fontWeight: 'bold',
        margin: '5px',
    }

    const subTitleStyle = {
        fontSize: '20px',
        margin: '5px',
    }

    return (
        <Container style={{margin: '20px auto'}}>
            <Row style={titleStyle}><Badge color="info">Student Information</Badge></Row>
            <Row>
                <Table borderless size="sm">
                    <thead>
                        <tr>
                            <th>Application Number {student.id}</th>
                            <th>{student.name} Student</th>
                            <th>{student.city} School</th>
                            <th>{student.zipcode}/4.3</th>
                            <th>{student.phone}</th>
                        </tr>
                    </thead>
                </Table>
            </Row>
            <br/><br/>
            <Row style={titleStyle}><Badge color="info">Scholarship Application and Benefit History</Badge></Row>
            <Row>
                <Table size="sm">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Scholarship Name</th>
                            <th>Status</th>
                            <th>Payment Date</th>
                            <th>Payment Amount (KRW)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>A Scholarship</td>
                            <td>Payment Completed</td>
                            <td>2019-09-18</td>
                            <td>300,000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>B Scholarship</td>
                            <td>Payment Completed</td>
                            <td>2019-10-28</td>
                            <td>2,000,000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>C Scholarship</td>
                            <td>Returned</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>D Scholarship</td>
                            <td>Application Completed</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <br/>
            <Link to={`/selections/${scholarId}`}><Button>Back to List</Button></Link>
        </Container>
    )
}

export default StudentDetail;