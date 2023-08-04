import styled from 'styled-components';

export const UserCard = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid gray;
  text-align: center;
  background-color: white;

  img {
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 0 10px 4px gray;
  }

  p:first-of-type {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: 0 auto;
`;

export const LustItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 2px solid gray;
  background-color: #fff111;

  align-items: center;
  padding: 24px;

  span:last-child {
    font-weight: bold;
  }
`;
