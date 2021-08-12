import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/login/index';
import Register from './pages/register/index';

interface RoutesProps { }

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({}) => {
  const options: StackNavigationOptions = {
    headerTitleAlign: 'center',
  }
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={options}/>
        <Stack.Screen name="Register" component={Register} options={{headerTitleAlign: 'center', headerTitle: 'Cadastro'}}/>
      </ Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;