import * as React from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';

export default function Mybooking({ navigation }) {
    return (
        <View style={styles.bookingCont}>
            <View style={styles.firstContaineer}>
                <Text style={styles.textcont}>Show Past bookings</Text>
                <Text style={styles.textcont}>Check</Text>
            </View>
            <View style={styles.tableContaineer}>
                <View >
                    <View style={styles.tableContaineerFirst}>
                        <Text style={{fontSize:18,fontWeight:800 ,color:"#022D36"}}>20 Dec 23, Wed</Text>
                    </View>
                    <View style={styles.tableContaineerFirst}>
                        <Text>10:00 - 10:30</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.tableContaineerFirst}>
                        <Text>Test Facility1014</Text>
                    </View>
                    <View style={styles.tableContaineerFirst}>
                        <Text>Court Booking</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    bookingCont:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:'#022D36'
    },
    firstContaineer:{
        flexDirection:"row",
        marginTop:"2%",
        width:"100%",
        justifyContent:"space-around",
       
    },
    textcont:{
        color:'white',
        fontSize:20,
        fontWeight:'100',
        fontFamily:"serif",
       
    },
    tableContaineer:{
        backgroundColor:"white",
        width:"95%",
        flexDirection:"row",
        justifyContent:'space-around',
        padding:20,
        borderRadius:10,
        marginTop:10
    },
    tableContaineerFirst:{
        margin:5
    }
})