import React, { useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import { BASE_URL } from '../../../Utils/Index';


function PlayerInfo({navigation}: {navigation: any}): React.JSX.Element {
    const [fistName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName,setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [sportOfInterset, setSportOfInterset] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("");

    useEffect(() => {
        // handleClick();
      },[]);
    

    const handleClick = async () => {
        axios.post(BASE_URL, { loginId:firstName,last_name:lastName,email:email })
        .then(response => console.log(response.data));
   };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                <View>
                    <Text style={styles.infoText}>Player Info</Text>
                </View>
                <View style={styles.formContaineer}>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>First Name*</Text>
                        <TextInput style={styles.SubInput}
                        placeholder='First Name'
                        value={fistName} 
                        onChangeText={(text)=>setFirstName(text)} />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Middle Name*</Text>
                        <TextInput style={styles.SubInput} 
                        placeholder='Middle Name'
                        value={middleName}
                        onChangeText={(text)=>setMiddleName(text)}
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Last Name*</Text>
                        <TextInput style={styles.SubInput}
                        placeholder='Last Name'
                        value={lastName}
                        onChangeText={(text)=>setLastName(text)}
                         />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Nick Name*</Text>
                        <TextInput style={styles.SubInput}
                        placeholder='Nick Name'
                        value={nickName}
                        onChangeText={(text)=>setNickName(text)} />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Gender</Text>
                        <Picker
                            style={styles.SubInput}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                       
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Date of Birth</Text>
                        <TextInput style={styles.SubInput} placeholder='YYYY-MM-DD' />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Age*</Text>
                        <TextInput style={styles.SubInput}
                        placeholder='Enter Your Age' />
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.label}>Sports of Interest</Text>
                        <Picker
                            style={styles.SubInput}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Select Sport" value="" />
                            <Picker.Item label="Cricket" value="Cricket" />
                            <Picker.Item label="Fottball" value="Football" />
                            <Picker.Item label="Vollyball" value="Vollyball" />
                            <Picker.Item label="Badmintion" value="Badmintion" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.buttonContaineer}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText} onPress={() => navigation.navigate('login')}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00203f",
    },
    page: {
        height: 'auto',
        marginTop: 10,
        alignItems: "center",
    },

    infoText: {
        fontSize: 30,
        fontWeight: '700',
        fontFamily: "Georgia, serif",
        color: 'white',
    },
    formContaineer:{
        marginTop:10,
        width: '80%',
    },
    containerInput: {},
    label: {
        fontSize: 20,
        color: "white"
    },
    SubInput: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
    },
    buttonContaineer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: 'goldenrod',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        margin: 5,
        width: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
});
export default PlayerInfo;