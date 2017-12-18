import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Button from './button';

class ListaCoisas extends Component {

  state = {lista: []};

  componentWillMount(){
    console.log('ListaCoisas.componentWillMount');
    this.carregaLista();
  }
  
  carregaLista(){
    console.log("carregalista");
    /*
    setTimeout(() => {
      console.log("carregalista timeout");
      this.setState({
        lista:[
          {id: 1, produto:"Arroz"},
          {id: 2, produto:"Bife"},
          {id: 3, produto:"Feijao"}
        ]
      });
    }, 1000);
    */
    const url = "https://raw.githubusercontent.com/munifgebara/reactnative/master/lista/lista.json"
    fetch(url)
    .then(
      resposta => {
        resposta.json().then(
          data => {
            console.log(data);
            this.setState({lista:data});
          });
        console.log("OK", resposta);
      }
    )
    .catch(
      erro => {
        console.log("erro", erro);
      }
    )
  }

  renderCoisas(){
    const { imagemStyle, containerStyle } = estilos;
    return this.state.lista.map(coisa=>
      <View style={containerStyle} key={coisa.id}>
        <Text>{coisa.produto}</Text>
        <Image style={imagemStyle} source={{uri: coisa.imagem}} />
        <Button onPress={()=>{this.remove(coisa);}}>Remover</Button>
      </View>
    )
  }

  remove(coisa){
    console.log("removendo coisa:", coisa);
    let l = this.state.lista.slice(0);
    let i = l.indexOf(coisa);
    l.splice(i, 1);
    this.setState({ lista: l });
  }

  render() {
    console.log(this.state);
    return(
      <ScrollView>
        {this.renderCoisas()}
      </ScrollView>
    )
  }
}
const estilos = {
    imagemStyle: {
        height: 300,
        width: 300
    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};

export default ListaCoisas;
