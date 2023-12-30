import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../../Component/CustomHeader'

const { width } = Dimensions.get('window');
const boxSize = (width - 60) / 2;

export default function Settings({ navigation }) {
    const detailBox = [
    { "image": "person-add-outline", "first": "Players", "second": "Details" },
    { "image": "mail-outline", "first": "Email", "second": "Support" },
    { "image": "people-outline", "first": "About", "second": "" },
    { "image": "log-out-outline", "first": "Logout", "second": "" }]
    return (
        <View style={styles.settingContaineer}>
            <CustomHeader title = "Prefrence" />
            <View style={{ flexDirection: 'row', height: '20%', alignItems: 'center', justifyContent: "center", marginTop: 20 }}>
                <View style={{flex:0,justifyContent:"center",alignItems:"center"}} >
                    <Image
                        source={{
                            uri: 'https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        }}
                        style={{ marginRight: 12, borderRadius: 100, width: '100%', height: "80%", aspectRatio: 1 }}
                    />
                    <Text style={styles.subText}>Don</Text>
                </View>
                <Text style={styles.subText}>Change</Text>
            </View>
            <View style={styles.tableContaineer}>
                <View style={styles.detailBox}>
                    {detailBox.map((item, index) => (
                        <TouchableOpacity style={styles.box} key={index}>
                            <Ionicons name={item.image} color={'white'} size={30}></Ionicons>
                            <Text style={styles.textcont}>{item.first}</Text>
                            <Text style={styles.textcont}>{item.second}</Text>
                        </TouchableOpacity>
                    ))}
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
    subText: {
        color: "white",
        fontSize:20,
    },
    detailBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    box: {
        width: boxSize,
        height: boxSize,
        backgroundColor: "goldenrod",
        borderRadius: 12,
        marginTop: 12,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    textcont:{
        marginRight:2,
        fontSize:20,
        color:"white",
        fontFamily:"serif"
    }
})