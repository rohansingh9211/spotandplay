import React, { useEffect, useState } from 'react'
import type {PropsWithChildren} from 'react';
import Login from '../Authentication/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Register';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import Dashboard from '../Dashboard/Dashboard';
import OnboardingScreen from '../../screen/onboarding/OnboardingScreen';
import FacilityList from '../Dashboard/FacilityList';
import { getItem } from '../../../Utils/asyncStorage';
import MainContainer from '../Dashboard/MainContainer';
import HomeScreen from '../Dashboard/HomeScreen';
import Mybooking from '../Dashboard/Mybooking';
import Settings from '../Dashboard/Settings';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack = createNativeStackNavigator();




function Router(): React.JSX.Element {

  const [showOnboarding, setShowOnboarding] = useState(null);
useEffect(()=>{
  checkIfAlreadyOnboarded();
},[])

const checkIfAlreadyOnboarded = async ()=>{
  let onboarded = await getItem('onboarded');
  if(onboarded==1){
    // hide onboarding
    setShowOnboarding(false);
  }else{
    // show onboarding
    setShowOnboarding(true);
  }
}

if(showOnboarding==null){
  return null;
}

if(showOnboarding){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnboardingScreen'>
        <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}}  component={Register} />
        <Stack.Screen name="PlayerInfo" options={{headerShown: false}}  component={PlayerInfo}/>
        <Stack.Screen name="MainContainer" options={{headerShown: false}}  component={MainContainer}/>
        <Stack.Screen name='FacilityList' component={FacilityList}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Mybooking' component={Mybooking}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}else{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="login" options={{headerShown: false}}  component={Login} />
        <Stack.Screen name="Register"   component={Register} />
        <Stack.Screen name="PlayerInfo"  component={PlayerInfo}/>
        <Stack.Screen name="MainContainer" options={{headerShown: false}}  component={MainContainer}/>
        <Stack.Screen name='FacilityList' component={FacilityList}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Mybooking' component={Mybooking}/>
        <Stack.Screen name='Settings' component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
}

export default Router;