import { useState } from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import CustomHeader from '../../Component/CustomHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-paper';

export default function Mybooking({ navigation }) {
    const [switchOn, setSwitchOn] = useState(false)
    return (
        <LinearGradient colors={['rgba(16, 34, 80, 1)', 'rgba(69, 92, 148, 1)', 'rgba(16, 34, 80, 1)']} style={{ flex: 1 }}>
            <View style={styles.bookingCont}>
                <CustomHeader title="Mybooking" />
                <View style={styles.logoImage}>
                    <Image source={require('../../../assets/images/spot.png')} style={{ width: 150, height: 150, position: "absolute", top: 0 }} />
                    <TouchableOpacity style={{ position: "absolute", right: 15, top: 35 }}>
                        <Ionicons name='log-out-outline' color={'white'} size={30}></Ionicons>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
                    <Text style={{ fontSize: 25, color: "rgba(255, 255, 255, 1)" }}>My Booking</Text>
                </View>
                <View style={styles.firstContaineer}>
                    <Text style={styles.textcont}>Show Past bookings</Text>
                    <Switch
                        style={styles.textcont}
                        value={switchOn}
                        onValueChange={() => {
                            setSwitchOn(!switchOn);
                        }}
                        thumbColor={switchOn ? 'aqua' : 'gray'}
                        trackColor={{ false: 'lightgray', true: 'aqua' }}
                    />

                </View>
                <View style={{ backgroundColor: "rgba(255, 153, 51, 1)", borderRadius: 10, marginTop: 20 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 5 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "rgba(255, 255, 255, 1)", lineHeight: 23}}>
                            Grand sports
                        </Text>
                    </View>
                    <View style={styles.tableContaineer}>
                        <View >
                            <View style={styles.tableContaineerFirst}>
                                <Text style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>20 Dec 23, Wed</Text>
                            </View>
                            <View style={styles.tableContaineerFirst}>
                                <Text style={{ color: "#fff", fontWeight: 600 }}>10:00 - 10:30</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.tableContaineerFirst}>
                                <Text style={{ color: "#fff", fontWeight: 700 }}>Test Facility1014</Text>
                            </View>
                            <View style={styles.tableContaineerFirst}>
                                <Text style={{ color: "#fff", textAlign: "right", fontWeight: 600 }}>Court Booking</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    bookingCont: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logoImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center",
        height: 100,
        width: '100%',
        position: "relative"
    },
    firstContaineer: {
        marginTop: 20,
        flexDirection: "row",
        marginTop: "2%",
        width: "100%",
        justifyContent: "space-around",
    },
    logoImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignContent: "center",
        height: 100,
        width: '100%',
        position: "relative"
    },
    textcont: {
        color: 'white',
        fontSize: 20,
        fontWeight: '100',
        fontFamily: "serif",

    },
    tableContaineer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: 'space-around',
        padding: 10,
    },
    tableContaineerFirst: {
        margin: 5
    }
})