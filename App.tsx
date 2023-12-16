/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import login from './component/Authentication/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './component/Authentication/Register';
import PlayerInfo from './component/Player Info/PlayerInfo'

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="playerinfo" component={PlayerInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
