import styled from 'styled-components';


export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => (props.children ? 'green' : 'red') };
  border-radius: 50%;
`;
