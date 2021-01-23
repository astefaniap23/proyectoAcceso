import * as React from 'react';
import {StyleSheet,View,Image} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer"

import {Contexto} from './Contexto';
import Principal from './Principal';
import Registrarse from './Registrarse';
import ListarUsuarios from './ListarUsuarios';
const Drawer = createDrawerNavigator();

class Menu extends React.Component{
    render(){
        return(
           <Drawer.Navigator initialRouteName="Bienvenida" 
           drawerStyle={{backgroundColor:"orange",width:200}} 
           drawerContentOptions={{activeBackgroundColor:"blue",
           activeTintColor:"white",itemStyle:{marginVertical:10}}}>
               <Drawer.Screen name="Bienvenida" component={Principal}/>
               <Drawer.Screen name="CrearCuenta" component={Registrarse}/>
               <Drawer.Screen name="ListarUsuarios" component={ListarUsuarios}/>
           </Drawer.Navigator>
        );
    }
}

Menu.contextType = Contexto;   //----- Contexto global

export default Menu;