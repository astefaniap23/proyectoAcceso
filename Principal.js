import React from 'react';
import {StyleSheet,View,Image,TouchableOpacity,ImageBackground,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Contexto} from './Contexto';


var rutaFondo=require("./imagenes/fondo.jpg");
var rutaLogo= require("./imagenes/logo.png")


class Principal extends React.Component{
    confirmar=()=>{alert("Sesion CerradO OK")}
    render(){
        return (<View style={miestilo.contenedor}>
                <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
                     <ScrollView>
                        <Text style={miestilo.titulo}>Bienvenido al sistema</Text>
                        <TouchableOpacity style={miestilo.botonCerrar} onPress={this.confirmar}>
                            <Text style={miestilo.textoBoton}>Cerrar Sesion</Text>
                         </TouchableOpacity>
                    </ScrollView>
                  </ImageBackground>
            </View>
        )
    }
}

Principal.contextType = Contexto;   //----- Contexto global


const miestilo=StyleSheet.create(
    { 
        contenedor:{   
            flex:1,
            flexDirection:'row',
            justifyContent:"center"
        },
        imagenFondo:{
            flex:1,
            resizeMode:"cover",
            justifyContent:"center"
        },
        caja:{
            height:100,
            width:300,
            alignContent:"center",
            backgroundColor:"orange",
            borderRadius:360,
            marginLeft:50
        },
        titulo:{
            fontSize:30,
            color:"white",
            marginBottom:10,
            fontWeight:"bold"
        },
        logo:{
            resizeMode:"contain",
            height:150,
            width:150,
            justifyContent:"center",
            transform:[{scale:1.5}],
            marginLeft:60,
            marginTop:-25
        },
        botonCerrar:{
            width:"80%",
            backgroundColor:"red",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10, 
            marginBottom:10
        }
    }
);

export default Principal;