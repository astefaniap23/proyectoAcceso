import React,{Component} from 'react';
import {Button,View,Text} from 'react-native';
import {Contexto} from './Contexto' ;

export default class Mantenimiento extends Component{
    render(){
        return(
            <View>
                <Text>Mantenimiento</Text>
                <Button title="Insertar Registros" onPress={()=> this.props.navigation.navigate("FormularioInsertar")} />
                <Button title="Listar Registros" color="red" onPress={()=> this.props.navigation.navigate("Listar")} />
            </View>
        );
    }
}

Mantenimiento.contextType=Contexto;
