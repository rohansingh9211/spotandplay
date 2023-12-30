import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomHeader from '../../Component/CustomHeader';

export default function Settings({ navigation }) {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text
        //         onPress={() => alert('This is the "Home" screen.')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        // </View>
        <View style={styles.settingContaineer}>
        <CustomHeader title="Preferences"/>
            <View style={{ flexDirection: 'row', height: '20%', alignItems: 'center', justifyContent: "center",marginTop:12}}>
                <View >
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                        style={{ marginRight: 12, borderRadius: 100, width: '100%', height: "80%", aspectRatio: 1 }}
                    />
                    <Text style={styles.subText}>Don</Text>
                </View>
                    <Text  style={styles.subText}>Change</Text>
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
    settingContaineer: {
        flex: 1,
        backgroundColor: '#022D36',
    },
    containeer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    subText:{
        color:"white"
    }
})