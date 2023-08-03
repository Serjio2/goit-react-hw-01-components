import styled from "styled-components";

export const Container = styled.div`
    background-color: lightgray;
`;

export const UserCard = styled.div`
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid red;
    text-align: center;
    background-color: white;

    img {
        width: 150px;
        /* border-radius: 20px; */
    }

    p:first-of-type {
        font-size: 24px;
        font-weight: bold;
    }
`;