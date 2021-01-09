import React from 'react';
import {StyleSheet,View,Image,TouchableOpacity,ImageBackground} from 'react-native';
import {Contexto} from './Contexto';


var rutaFondo=require("./imagenes/fondo.jpg");
var rutaLogo= require("./imagenes/logo.png")


class Principal extends React.Component{
    render(){
        return (<View style={miestilo.contenedor}>
                <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
                    <View style={miestilo.caja}>
                        <TouchableOpacity activeOpacity={0.2} onPress={()=>this.props.navigation.navigate("Acceso")}>
                            <Image style={miestilo.logo} source={require("./imagenes/logo.png")} style={miestilo.logo}/>
                        </TouchableOpacity>
                    </View>
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
        logo:{
            resizeMode:"contain",
            height:150,
            width:150,
            justifyContent:"center",
            transform:[{scale:1.5}],
            marginLeft:60,
            marginTop:-25
        }
    }
);

export default Principal;