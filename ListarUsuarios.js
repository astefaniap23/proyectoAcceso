import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Contexto} from './Contexto';
import {db} from './ConectarFirebase';
import ListarRegistroUsuariosComp from './ListarRegistroUsuariosComp';

let coleccion=db.ref('registro/');

export default class ListarUsuarios extends Component{
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
                <ListarRegistroUsuariosComp items={this.state.campos} />
                ):(
                    <Text>No hay registros</Text>
                )}
            </View>
        );
    }
}

ListarUsuarios.contextType=Contexto;

const miestilo=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#9c9c9c'
    }

});