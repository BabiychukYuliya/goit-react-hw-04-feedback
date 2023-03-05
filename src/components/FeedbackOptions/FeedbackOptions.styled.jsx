import styled from '@emotion/styled';

export const ContainerBtn = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: white;
  font-size: 16px;
  border-radius: 2px;
  color: black;
  box-shadow: 2px 2px 2px gray;
  &:hover {
    color: white;
    background-color: blue;
  }`;
