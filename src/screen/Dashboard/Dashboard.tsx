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
    Alert,
} from 'react-native';
import Footer from '../../Component/BottomNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FacilityList from './FacilityList';

function Dashboard({ navigation }: { navigation: any }): React.JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedItem, setSelectedItem] = useState("Sports");

    const handleLogin = () => {
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Add your authentication logic or API call here
    };
    const handleItemPress = (item: string | React.SetStateAction<null>) => {
        setSelectedItem(item);
        return(
            <View>
 <FacilityList/>
            </View>
           
        );
    };

    return (
        <View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View>
                    <View style={styles.searchSportbody}>
                        <View style={styles.logoImage}>
                            <Image source={require('../../Images/spotandplaylogo.jpg')} style={{ width: '40%', height: '60%', marginBottom: 12 }} />
                            <TouchableOpacity style={{ position: "absolute", right: 12, top: 15 }}>
                                <Ionicons name='log-out-outline' color={'white'} size={30}></Ionicons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchSport}>
                            <TouchableOpacity style={styles.search}>
                                <Ionicons name='search-outline' color={'black'} size={15} style={{ paddingLeft: 5 }} />
                                <TextInput ></TextInput>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name='send' color={'black'} size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.twoWaysoption}>
                            <TouchableHighlight
                                underlayColor={selectedItem === 'Sports' ? 'goldenrod' : 'transparent'}
                                onPress={() => handleItemPress('Sports')}
                                style={[styles.selectedItem, selectedItem === 'Sports' ? styles.colored : null]}>
                                <Text>Sports</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor={selectedItem === 'Facilities' ? 'goldenrod' : 'transparent'}
                                onPress={() => handleItemPress('Facilities')}
                                style={[styles.selectedItem, selectedItem === 'Facilities' ? styles.colored : null]}>
                                <Text>Facilities</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={undefined} />
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: "90%"
    },

    logoImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center",
        height: 70,
        width: '100%',
        position: "relative"
    },

    searchSportbody: {
        backgroundColor: "#00203f",
        height: 'auto',
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12
    },

    searchSport: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 12,
        justifyContent:"space-around"
    },

    search: {
        width: "80%",
        backgroundColor:'#dcdcdc',
        height:"70%",
        borderRadius:12,
        flexDirection:"row",
        alignItems:"center"
    },

    twoWaysoption: {
        backgroundColor: "white",
        width: "90%",
        borderRadius: 12,
        flexDirection: "row",
        height: '20%',
        fontSize: 8,
        marginTop: 8,
    },

    selectedItem: {
        width: "50%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 12,
    },

    colored: {
        backgroundColor: "goldenrod",
        borderWidth: 2,
        borderColor: 'white'
    }

});

export default Dashboard;
