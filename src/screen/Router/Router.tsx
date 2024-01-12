import React, { useEffect, useState } from 'react'
import type { PropsWithChildren } from 'react';
import Login from '../Authentication/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Full Register/Register';
import PlayerInfo from '../Authentication/Full Register/PlayerInfo';
import OnboardingScreen from '../../screen/onboarding/OnboardingScreen';
import FacilityList from '../Dashboard/FacilityList';
import { getItem } from '../../../Utils/asyncStorage';
import MainContainer from '../Dashboard/MainContainer';
import HomeScreen from '../Dashboard/HomeScreen';
import Mybooking from '../Dashboard/Mybooking';
import Settings from '../Dashboard/Settings';
import Contact from '../Authentication/Full Register/Contact';
import RegisterContainer from '../Authentication/Full Register/RegisterContainer';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();




function Router(): React.JSX.Element {
  const [showOnboarding, setShowOnboarding] = useState(null);
  const [userLoggedIned, setUserLoggedIned] = useState(false);
  useEffect(() => {
    checkIfAlreadyOnboarded();
    setTimeout(() => {
      userLoggedIn();
    }, 2000);
  }, [userLoggedIned]);
  

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    console.log(onboarded, '---');

    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  }

  const userLoggedIn = async () => {
    const token = await getItem('access_token');
    console.log('hello');
    
    if (token) {
      setUserLoggedIned(true);
    } else {
      setUserLoggedIned(false);
    }
    console.log(userLoggedIned,'----');
    
  };

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='OnboardingScreen'>
          <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} component={OnboardingScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="RegisterContainer" options={{ headerShown: false }} component={RegisterContainer} />
          <Stack.Screen name="Contact" options={{ headerShown: false }} component={Contact} />
          <Stack.Screen name="MainContainer" options={{ headerShown: false }} component={MainContainer} />
          <Stack.Screen name='FacilityList' options={{ headerShown: false }} component={FacilityList} />
          <Stack.Screen name='Mybooking' options={{ headerShown: false }} component={Mybooking} />
          <Stack.Screen name='Settings' options={{ headerShown: false }} component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={userLoggedIned == false ? 'Login' : 'MainContainer'}>
          {userLoggedIned == false ? (
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
              <Stack.Screen name="RegisterContainer" options={{ headerShown: false }} component={RegisterContainer} />
              <Stack.Screen name="MainContainer" options={{ headerShown: false }} component={MainContainer} />
              <Stack.Screen name="Contact" options={{ headerShown: false }} component={Contact} />

            </>
          ) : (
            <>
              <Stack.Screen name="MainContainer" options={{ headerShown: false }} component={MainContainer} />
              <Stack.Screen name='FacilityList' options={{ headerShown: false }} component={FacilityList} />
              <Stack.Screen name='HomeScreen' options={{ headerShown: false }} component={HomeScreen} />
              <Stack.Screen name='Mybooking' options={{ headerShown: false }} component={Mybooking} />
              <Stack.Screen name='Settings' options={{ headerShown: false }} component={Settings} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default Router;