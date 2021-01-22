import * as React from 'react';
import {StyleSheet,View,Image,TouchableOpacity,ImageBackground,Animated} from 'react-native';
import {Contexto} from './Contexto';


var rutaFondo=require("./imagenes/fondo.jpg");
var rutaLogo= require("./imagenes/logo.png")


class ClassAnimacion extends React.Component{
    constructor(props){
        super(props);
        this.rotation=new Animated.Value(0);
    }
    componentDidMount(){
        if(this.props.animar==true){
            this.animacion()
        }
    }
    animacion=()=>{
        Animated.timing(this.rotation,{
            duration:2000,
            toValue:1,
            useNativeDriver:true
        }).start((completation)=>{
            if(completation.finished){
                this.rotation.setValue(0);
                this.animacion();
            }
        });
    }
    render(){
        const rotation= this.rotation.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
        });
        const transform={
            transform:[{rotate:rotation},{scale:1.5}]
        }
  
    return(
        <Animated.Image 
            style={miestilo.logo, transform}
            source={require("./imagenes/logo.png")}
        />
    );
    }

}

class Inicio extends React.Component{
    constructor(props){
        super(props);
        this.rotation = new Animated.Value(0);
    }
    render(){
        return (
                <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
                    <View style={miestilo.caja}>
                        <TouchableOpacity activeOpacity={0.2} onPress={()=>this.props.navigation.navigate("Acceso")}>
                            <Image style={miestilo.logo} source={require("./imagenes/logo.png")} style={miestilo.logo}/>
                            <ClassAnimacion animar={true}/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
        );
    }
}

Inicio.contextType = Contexto;   //----- Contexto global


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
            height:300,
            width:300,
            alignContent:"center",
            backgroundColor:"orange",
            borderRadius:360,
            marginLeft:85,
            padding:55,
            borderWidth:5
        },
        logo:{
            resizeMode:"contain"
        }
    }
);

export default Inicio;