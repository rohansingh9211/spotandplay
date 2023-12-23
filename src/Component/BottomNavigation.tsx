import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    View,
    Image,
    TouchableHighlight,
    Button,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

function BottomNavigation({ navigation }: { navigation: any }): React.JSX.Element {
    const [isClicked, setClicked] = useState('');
    return (
        <View style={styles.containeer}>
            <TouchableOpacity
                style={styles.iconicContain}
                onPress={() => setClicked('home')} >
                <Ionicons
                    name='home-outline'
                    size={30}
                    color={isClicked === 'home' ? 'aqua' : 'grey'} 
                />
               <Text style={{ color: isClicked === "home" ? 'aqua' : 'grey' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconicContain}  onPress={() => setClicked('fav')}>
                <Ionicons name='star' size={30} color={isClicked === 'fav' ? 'aqua' : 'grey'}></Ionicons>
                <Text style={{ color: isClicked === "fav" ? 'aqua' : 'grey' }}>Favs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconicContain}  onPress={() => setClicked('booking')}>
                <Ionicons name='calendar-outline' size={30} color={isClicked === 'booking' ? 'aqua' : 'grey'}></Ionicons>
                <Text style={{ color: isClicked === "booking" ? 'aqua' : 'grey' }}>MyBookings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconicContain}  onPress={() => setClicked('pref')}>
                <Ionicons name='settings-outline' size={30} color={isClicked === 'pref' ? 'aqua' : 'grey'}></Ionicons>
                <Text style={{ color: isClicked === "pref" ? 'aqua' : 'grey' }}>Prefrence</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    containeer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        // borderWidth: 0.5,
        // borderColor: "grey"
    },
    iconicContain: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
});
export default BottomNavigation;