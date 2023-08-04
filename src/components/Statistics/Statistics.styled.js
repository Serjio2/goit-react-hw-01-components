import styled from "styled-components";

export const Stats = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 20px  auto;
    background-color: white;
    width: 300px;

    h2 {
        height: 30px;
        text-transform: uppercase;
        margin: 20px 0;
    }
`;

export const List = styled.ul`
    display: flex;
`;

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }


export const ListItem = styled.li`
    padding: 20px 10px;
    background-color: ${getRandomHexColor};


    span:first-of-type {
        font-size: 14px;
    }

    span:last-of-type {
        font-size: 20px;
    }
`;