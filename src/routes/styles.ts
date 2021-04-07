import styled from 'styled-components/native';

export const Ball = styled.View<{
  color: string;
}>`
  background-color: ${({color}) => color};
  width: 5px;
  height: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`;
