import React from 'react';
import {StyleSheet,View,Image,TouchableOpacity,Text,ImageBackground,TextInput} from 'react-native';
import {Contexto} from './Contexto';


var rutaFondo=require("./imagenes/fondo.jpg");
var rutaLogo= require("./imagenes/logo.png")


class Acceso extends React.Component{
    render(){
        return(
             <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
                <View style={miestilo.contenedor}>
                    <Text style={miestilo.titulo}>Acceso al sistema</Text>
                    <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} placeholder="Usuario..."/>
                     </View>
                     <View style={miestilo.vistaImput}>
                        <TextInput style={miestilo.textoImput} secureTextEntry placeholder="Clave.."/>
                     </View>
                <TouchableOpacity style={miestilo.botonIngresar} onPress={()=> this.props.navigation.navigate("Inicio")}>
                    <Text style={miestilo.textoBoton}>Ingrear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={miestilo.botonRegistrarse} onPress={()=> this.props.navigation.navigate("Inicio")}>
                    <Text style={miestilo.textoBoton}>Registrarse</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

Acceso.contextType = Contexto;   //----- Contexto global


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

export default Acceso;