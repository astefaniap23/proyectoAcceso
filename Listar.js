import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Contexto} from './Contexto';
import {db} from './ConectarFirebase';
import ListarComponentes from './ListarComponentes';

let coleccion=db.ref('datos/');

export default class Listar extends Component{
    state={
        campos:[]
    }
    componentDidMount(){
        coleccion.on('value',snapshot=>{
            let data=snapshot.val();
            let campos=Object.values(data);
            this.setState({campos});
        });
    }
    render(){
        return(
            <View style={miestilo.contenedor}>
                {this.state.campos.length> 0 ? (
                <ListarComponentes items={this.state.campos} />
                ):(
                    <Text>No hay registros</Text>
                )}
            </View>
        );
    }
}

Listar.contextType=Contexto;

const miestilo=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#9c9c9c'
    }

});