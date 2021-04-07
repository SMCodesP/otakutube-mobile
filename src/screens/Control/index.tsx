import React, {useContext} from 'react';
import {TouchableOpacity, FlatList} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import {ThemeContext} from 'styled-components';

import {DeviceType} from '../../typings/DeviceType';

import {
  Container,
  ContainerDevice,
  Title,
  DeviceInfo,
  DeviceName,
  DeviceDescription,
} from './styles';

const Control: React.FC = () => {
  const theme = useContext(ThemeContext);

  const device_colors = [
    theme.purple,
    theme.pink,
    theme.green,
    theme.orange,
    theme.red,
    theme.yellow,
  ];

  return (
    <Container>
      <Title>Dispositivos</Title>
      <FlatList
        data={[
          {
            id: 'ep6oFhOW',
            watching: 'Kimetsu No Yaiba Episodio 01',
            device_name: 'Linux - Google Chrome',
            device_type: 'device-desktop',
          },
          {
            id: 'MNQX2Mwq',
            watching: 'Kimetsu No Yaiba Episodio 02',
            device_name: 'Android App',
            device_type: 'device-mobile',
          },
        ]}
        horizontal={false}
        keyExtractor={item => item.id}
        renderItem={({item}: {item: DeviceType}) => (
          <TouchableOpacity>
            <ContainerDevice
              color={
                device_colors[Math.floor(Math.random() * device_colors.length)]
              }>
              <Octicons
                name={item.device_type}
                size={52}
                color={theme.background}
              />
              <DeviceInfo>
                <DeviceName>{item.device_name}</DeviceName>
                <DeviceDescription>{item.watching}</DeviceDescription>
              </DeviceInfo>
            </ContainerDevice>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Control;
