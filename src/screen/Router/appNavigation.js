import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../component/Player Info/OnboardingScreen.js';
import { getItem } from '../utils/asyncStorage';
import Login from '../component/Authentication/Login';
import FacilityList from '../component/FacilityList.js';


const Stack = createNativeStackNavigator();


export default function AppNavigation() {

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
          <Stack.Screen name='FacilityList' component={FacilityList}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="OnboardingScreen" options={{headerShown: false}} component={OnboardingScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name='FacilityList' component={FacilityList}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  
}
