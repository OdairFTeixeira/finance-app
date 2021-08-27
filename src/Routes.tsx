import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './pages/login';
import Register from './pages/register';
import Menu from './pages/menu';
import Accounts from './pages/accounts';

interface RoutesProps { }

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const options: StackNavigationOptions = {
    headerTitleAlign: 'center',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={options} />
        <Stack.Screen name="Register" component={Register} options={{ headerTitleAlign: 'center', headerTitle: 'Cadastro' }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerTitleAlign: 'center', headerTitle: 'Menu' }} />
        <Stack.Screen name="Accounts" component={Accounts} options={{ headerTitleAlign: 'center', headerTitle: 'Contas' }} />
      </ Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;