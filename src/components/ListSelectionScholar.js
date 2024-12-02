import React from "react";
import { Table, Button } from "reactstrap";
import "./content.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchContainer from "../containers/SearchContainer";

const ListSelectionScholar = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord, orderBase }) => {

  if (loading || !scholars) {
    return null;
  }

  // Filter by search word if provided
  if (searchWord) {
    scholars = scholars.filter((scholars) => {
      return scholars.title.indexOf(searchWord) > -1;
    });
  }

  // Sort by order base if provided
  if (orderBase) {
    orderBase = 'content';
    scholars = scholars.sort(function (a, b) {
      return a[orderBase] < b[orderBase] ? -1 : 1;
    });
  }

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);

  // Render a table of scholarship data
  const applyList = scholars.slice(startIndex, endIndex).map((scholars, index) => (
    <tr key={scholars.id}>
      <th scope="row">{scholars.id}</th>
      <td style={{ width: '600px' }}>{scholars.title}</td>
      <td style={{ width: '100px' }}>{(scholars.completed) ? "Completed" : "In Progress"}</td>
      <td><Link to={`/selections/${scholars.id}`}><button>View Details</button></Link></td>
    </tr>
  ));

  const pageStyle = {
    margin: '10px',
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span>
        <div className="container">
          <SearchContainer type="scholar" />
          <Table striped>
            <thead>
              <tr>
                <th></th>
                <th style={{ width: '500px' }}>Name</th>
                <th>Status</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {applyList}
            </tbody>
          </Table>
          <Button disabled={tempPage <= 1} onClick={prevPage}>Previous</Button>
          <span style={pageStyle}>{tempPage}</span>
          <Button disabled={tempPage >= lastPage} onClick={nextPage}>Next</Button>
        </div>
      </span>
    </div>
  );
}

export default ListSelectionScholar;

const Appcontainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;
