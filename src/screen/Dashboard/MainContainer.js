import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import FacilityList from './FacilityList';
import HomeScreen from './HomeScreen';
import Mybooking from './Mybooking';
import Settings from './Settings';

//Screen names
const homeName = "Home";
const favName = "Favs";
const bookingName="My bookings";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === favName) {
              iconName = focused ? 'star' : 'star-outline';

            } else if (rn === bookingName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            }
            else if (rn === settingsName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'aqua',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={FacilityList} options={{headerShown:false}}/>
        <Tab.Screen name={favName} component={FacilityList} options={{headerShown:false}}/>
        <Tab.Screen name={bookingName} component={Mybooking} options={{headerShown:false}}/>
        <Tab.Screen name={settingsName} component={Settings} options={{headerShown:false}}/>

      </Tab.Navigator>
  );
}

export default MainContainer;