import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 600px;
  border-collapse: collapse;
  border: 3px solid black;
  text-align: center;
  color: black;
  margin: 20px auto;

  thead, tfoot {
  color: white;
  text-shadow: 1px 1px 1px black;
}

  thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th {
    padding: 15px;
    background-color: lightblue;
    text-transform: uppercase;
    outline: 1px solid lightgray;
}

td {
    padding: 10px;
  text-transform: capitalize;
  outline: 1px solid lightgray;
}
`;

export const TableBody = styled.tbody`
    tr:nth-child(odd) {
  background-color: gray;
}

tr:nth-child(even) {
  background-color: white;
}
`;
