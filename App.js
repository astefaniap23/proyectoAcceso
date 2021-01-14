import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Contexto } from './Contexto';
import Inicio from './Inicio';
import Acceso from './Acceso';
import Principal from './Principal';
import Registrarse from './Registrarse';

const Stack = createStackNavigator();

class App extends React.Component{
  render(){
    return(<Contexto.Provider>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen 
               name="Inicio" component={Inicio}/>  
              <Stack.Screen 
               name="Acceso" component={Acceso}/>  
              <Stack.Screen 
               name="Principal" component={Principal}/>  
               <Stack.Screen 
               name="Registrarse" component={Registrarse}/>  
          </Stack.Navigator>
        </NavigationContainer>
        </Contexto.Provider>
    )
  }
}
export default App;