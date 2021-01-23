import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';

export default class ListarComponentes extends Component{
    static PropTypes={
        item: PropTypes.array.isRequired
    };
    render(){
        return(
            <View style={miestilo.listaCampos}>
                   {this.props.items.map((campo,indice)=>{
                return(
                       <View key={indice}>
                           <Text style={miestilo.textoCampo}>
                               {campo.nombre}
                           </Text>
                           <Text style={miestilo.textoCampo}>
                               {campo.apellido}
                           </Text>
                       </View>
                   );
              })}
            </View>
        );
    }
}

const miestilo=StyleSheet.create(
    {
        listaCampos:{
            flex:1,
            flexDirection:'column',
            justifyContent:'space-around'
        },
        textoCampo:{
            fontSize:24,
            fontWeight:'bold',
            textAlign:'center'
        }
    }
);
