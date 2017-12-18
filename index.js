import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Titulo from './src/componentes/titulo';
import ListaCoisas from './src/componentes/lista-coisas';

const App = () => {
  return (
    <View>
      <Titulo texto={"Lista de Coisas 2 - O Retorno"}/>
      <ListaCoisas />
    </View>
  );
};

AppRegistry.registerComponent('lista', () => App);

