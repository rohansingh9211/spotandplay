import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeHeader = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState("Sports");
    const [selectKiloMeters, setSelectKiloMeters] = useState(1)

    const handleItemPress = (item) => {
        setSelectedItem(item);
    };
    // const selectKiloMeter = (item) =>{

    // }
    function logoutOurSelf() {
        AsyncStorage.removeItem('access_token');
        Alert.alert("Logout Successfully");

    }
    return (
        <View style={styles.searchSportbody}>
            <View style={styles.logoImage}>
                <Image source={require('../../assets/images/spot.png')} style={{ width: 150, height: 150, position: "absolute", top: 0 }} />
                <TouchableOpacity style={{ position: "absolute", right: 15, top: 35 }}>
                    <Ionicons name='log-out-outline' color={'white'} size={30} onPress={logoutOurSelf}></Ionicons>
                </TouchableOpacity>
            </View>
            <View style={styles.searchSport}>
                <TouchableOpacity>
                    <Feather name='send' color={'rgba(65, 156, 207, 0.76)'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.search}>
                    <TextInput style={{ height: "100%", width: "80%" }}
                        placeholder='Location'
                    ></TextInput>
                    <Ionicons name='search-outline' color={'grey'} size={20} style={{ position: "absolute", right: 12 }} />
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
            <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-around", width: "90%", paddingVertical: 8, borderRadius: 12 }}>
                <TouchableOpacity
                    style={[
                        selectKiloMeters === 1 ? styles.colored : styles.changedColered,
                        { paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }
                    ]}
                    onPress={(item => setSelectKiloMeters(1))}
                >
                    <Text>5</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[
                    selectKiloMeters === 2 ? styles.colored : styles.changedColered,
                    { paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }
                ]}
                    onPress={(item => setSelectKiloMeters(2))}
                >
                    <Text>10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    selectKiloMeters === 3 ? styles.colored : styles.changedColered,
                    { paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }
                ]}
                    onPress={(item => setSelectKiloMeters(3))}
                >
                    <Text>15</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                    selectKiloMeters === 4 ? styles.colored : styles.changedColered,
                    { paddingHorizontal: 20, paddingVertical: 5, borderRadius: 20 }
                ]}
                    onPress={(item => setSelectKiloMeters(4))}

                >
                    <Text>20</Text>
                </TouchableOpacity>
                <Text style={{ paddingHorizontal: 20, paddingVertical: 5 }}>Kms</Text>
            </View>
        </View>

    )
}
export default HomeHeader

const styles = StyleSheet.create({
    logoImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center",
        height: 100,
        width: '100%',
        position: "relative"
    },

    searchSportbody: {
        height: 250,
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
        width: "95%",

    },

    searchSport: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 12,
        justifyContent: "space-evenly"
    },

    search: {
        width: "80%",
        backgroundColor: '#dcdcdc',
        height: "70%",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },

    twoWaysoption: {
        width: "90%",
        flexDirection: "row",
        height: '20%',
        fontSize: 8,
        marginVertical: 10,
        justifyContent: "space-around"
    },

    selectedItem: {
        width: "40%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "white"
    },
    colored: {
        backgroundColor: "rgba(255, 153, 51, 1)",
    },
    changedColered: {
        backgroundColor: "rgba(222, 222, 222, 1)",
    }
})