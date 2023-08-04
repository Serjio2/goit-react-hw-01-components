import styled from "styled-components";

export const List = styled.ul`
    display:flex;
    flex-direction: column;
    /* margin: 0 auto; */
    align-items: center;
`;

export const ListItem = styled.li`
    display: flex;
    width: 300px;
    background-color: white;
    border: 2px solid gray;
    gap: 20px;
    padding: 10px 20px;
    box-shadow: 10px 5px 5px gray;
    margin-bottom: 5px;
    align-items: center;

    img {
        border-radius: 5px;
        box-shadow: 0 0 10px 4px gray;
    }
`;