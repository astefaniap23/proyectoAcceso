import React from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,ImageBackground,TextInput, Button} from 'react-native';
import {Contexto} from './Contexto';


var rutaFondo=require("./imagenes/fondo.jpg");
var rutaLogo= require("./imagenes/logo.png")


class Registrarse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:'',
            apellido:'',
            usuario:'',
            clave:''
        }
    }
    activarDesactivar(){
        var estado=false;
            if(!this.state.nombre)
                estado=true;
            if(!this.state.apellido)
                estado=true;    
            if(!this.state.usuario)
                estado=true;
            if(!this.state.clave)
                estado=true;

        return estado;
    }
    confirmacion=()=>{
        alert("Grabado OK")
        this.props.navigation.navigate("Acceso")
    }
    render(){
        return(
             <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
                <View style={miestilo.contenedor}>
                    <Text style={miestilo.titulo}>Registro de Usuario</Text>
                    <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} secureTextEntry placeholder="Nombre(s)" onChangeText={(nombre)=>this.setState({nombre})} />
                     </View>
                     <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} placeholder="Apellido(s)" onChangeText={(apellido)=>this.setState({apellido})}/>
                     </View>
                     <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} placeholder="Usuario" onChangeText={(usuario)=>this.setState({usuario})}/>
                     </View>
                     <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} secureTextEntry placeholder="Clave" onChangeText={(clave)=>this.setState({clave})}/>
                     </View>
                     <Button disabled={this.activarDesactivar()} title="Registrar" onPress={this.confirmacion} />
                </View>
            </ImageBackground>
        )
    }
}

Registrarse.contextType = Contexto;   //----- Contexto global


const miestilo=StyleSheet.create(
    { 
        contenedor:{   
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },
        contenedor2:{   
            flex:1,
            alignItems:"center",
            justifyContent:"center"
        },
        imagenFondo:{
            flex:1,
            resizeMode:"cover",
            justifyContent:"center"
        },
        titulo:{
            fontSize:30,
            color:"white",
            marginBottom:10,
            fontWeight:"bold"
        },vistaImput:{
            width:"80%",
            backgroundColor:"#9c9c9c",
            borderRadius:25,
            height:50,
            marginBottom:20,
            justifyContent:"center",
            padding:20
        },
        textoImput:{
            height:50,
            color:"blue"
         },
         botonIngresar:{
             width:"80%",
             backgroundColor:"red",
             borderRadius:25,
             height:50,
             alignItems:"center",
             justifyContent:"center",
             marginTop:10, 
             marginBottom:10
         },textoBoton:{
             color:"white"
         },botonRegistrarse:{
            width:"70%",
            backgroundColor:"blue",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10, 
            marginBottom:10
        }
    }
);

export default Registrarse;