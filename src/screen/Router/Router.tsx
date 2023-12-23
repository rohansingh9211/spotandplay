import React from 'react';
import type {PropsWithChildren} from 'react';
import Login from '../Authentication/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Register';
import PlayerInfo from '../Player Info/playInfo';
import dashboard from '../Dashboard/Dashboard';
import Dashboard from '../Dashboard/Dashboard';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();



function Router(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" options={{headerShown: false}}  component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}}  component={Register} />
        <Stack.Screen name="playerinfo" options={{headerShown: false}}  component={PlayerInfo}/>
        <Stack.Screen name="dashboard" options={{headerShown: false}}  component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;