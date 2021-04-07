import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 5px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({theme}) => theme.foreground};
`;

export const ContainerDevice = styled.View<{
  color: string;
}>`
  border-radius: 5px;
  flex: 1;
  background-color: ${({theme}) => theme.currentLine};
  overflow: hidden;
  height: 85px;
  border-color: ${({color}) => color};
  border-left-width: 3px;
  margin: 5px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
`;

export const DeviceInfo = styled.View`
  margin-left: 20px;
`;

export const DeviceName = styled.Text`
  color: ${({theme}) => theme.foreground};
  font-weight: bold;
  font-size: 24px;
`;

export const DeviceDescription = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({theme}) => theme.foreground};
  opacity: 0.35;
`;
