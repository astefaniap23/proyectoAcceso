import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Contexto} from './Contexto';
import Inicio from './Inicio';
import Acceso from './Acceso';
import Principal from './Principal';
import Registrarse from './Registrarse';
import Menu from './Menu';
import Mantenimiento from './Mantenimiento';
import FormularioInsertar from './FormularioInsertar' ;



const Stack = createStackNavigator();

class App extends React.Component{
  render(){
    return(<Contexto.Provider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Registrarse"
            screenOptions={{headerShown:false}}>
              <Stack.Screen 
               name="Inicio" component={Inicio}/>  
              <Stack.Screen 
               name="Acceso" component={Acceso}/>  
              <Stack.Screen 
               name="Principal" component={Principal}/>  
               <Stack.Screen 
               name="Registrarse" component={Registrarse}/>
               <Stack.Screen 
               name="Menu" component={Menu}/>  
                <Stack.Screen 
               name="Mantenimiento" component={Mantenimiento}/>  
              <Stack.Screen 
               name="FormularioInsertar" component={FormularioInsertar}/>  
          </Stack.Navigator>
        </NavigationContainer>
        </Contexto.Provider>
    )
  }
}
export default App;