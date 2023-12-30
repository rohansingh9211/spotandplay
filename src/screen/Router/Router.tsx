import React, { useEffect, useState } from 'react'
import type {PropsWithChildren} from 'react';
import Login from '../Authentication/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Authentication/Full Register/Register';
import PlayerInfo from '../Authentication/Full Register/PlayerInfo';
import Dashboard from '../Dashboard/Dashboard';
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
  const [userLoggedIned,setUserLoggedIned] = useState(false);
useEffect(()=>{
  checkIfAlreadyOnboarded();
  // userLoggedIn();
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
// const userLoggedIn=()=>{
//   try{
//     const token = await getItem('access_token');
//     if (token) {
//       setUserLoggedIned(true)
//     }
//   }
// }
if(showOnboarding==null){
  return null;
}

if(showOnboarding){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnboardingScreen'>
        <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen} />
        {userLoggedIned ? 
        <Stack.Screen name="login" options={{headerShown: false}} component={Login} /> : 
        <Stack.Screen name='HomeScreen' options={{headerShown: false}} component={HomeScreen}/>}
        <Stack.Screen name="Register" options={{headerShown: false}}  component={Register} />
        <Stack.Screen name="Contact" options={{headerShown: false}} component={Contact} />
        <Stack.Screen name="PlayerInfo" options={{headerShown: false}}  component={PlayerInfo}/>
        <Stack.Screen name="MainContainer" options={{headerShown: false}}  component={MainContainer}/>
        <Stack.Screen name='FacilityList' options={{headerShown: false}} component={FacilityList}/>
        <Stack.Screen name='Mybooking' options={{headerShown: false}} component={Mybooking}/>
        <Stack.Screen name='Settings' options={{headerShown: false}} component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}else{   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="login" options={{headerShown: false}}  component={Login} />
        <Stack.Screen name="Register" options={{headerShown: false}}   component={Register} />
        <Stack.Screen name="RegisterContainer" options={{headerShown: false}}   component={RegisterContainer} />
        <Stack.Screen name="Contact" options={{headerShown: false}} component={Contact} />
        <Stack.Screen name="PlayerInfo" options={{headerShown: false}}  component={PlayerInfo}/>
        <Stack.Screen name="MainContainer"  options={{headerShown: false}}  component={MainContainer}/>
        <Stack.Screen name='FacilityList' options={{headerShown: false}} component={FacilityList}/>
        <Stack.Screen name='HomeScreen' options={{headerShown: false}} component={HomeScreen}/>
        <Stack.Screen name='Mybooking' options={{headerShown: false}} component={Mybooking}/>
        <Stack.Screen name='Settings' options={{headerShown: false}} component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
}

export default Router;