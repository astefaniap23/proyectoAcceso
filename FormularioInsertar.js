import React,{Component} from 'react';
import {Button,View,Text,TouchableHighlight,TextInput} from 'react-native';
import {Contexto} from './Contexto' ;
import {db} from './ConectarFirebase' ;


function insertarDatos(nom,ape){
    db.ref('datos/').push({
        nombre:nom,
        apellido:ape
     }
    );
}

export default class FormularioInsertar extends Component{
    state={
        nombre:'',
        apellido:''
    };
    evento=()=>{
        insertarDatos(this.state.nombre,this.state.apellido)
        alert("Grabado");
    };
    render(){
        return(
             <View>
                 <Text>Formulario Insertar Registros</Text>
                 <Text>Ingresar Nombre:</Text>
                 <TextInput onChangeText={(nombre)=>this.setState({nombre})}/>
                 
                 <Text>Ingresar Apellido:</Text>
                 <TextInput onChangeText={(apellido)=>this.setState({apellido})}/>

                 <TouchableHighlight onPress={this.evento}>
                     <Text>Grabar</Text>
                 </TouchableHighlight>
             </View>
        );
    }

}