import React, { useState,useEffect } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Props } from '@react-native-community/checkbox/dist/CheckBox.android';
interface register {
    navigation: any,
    onDataFromChild: (data: any, data2: any) => void
}
const Register: React.FC<register> = ({ navigation, onDataFromChild }): React.ReactElement => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setconfirmpass] = useState('');
    const [isAgreementAggreed, setIsAgreementAggreed] = useState(false);
    const [isNotifyNewsletters, setIsNotifyNewsletters] = useState(false);
    // const [loginId,setLoginId] = useState('');

    const handleLogin = () => {
        console.log('Username:', email);
        console.log('Password:', password);
    };
    const sendValueParent = (data: number) => {
        // setLoginId(email);
        const loginId = email
        console.log(loginId,'loginId  ---');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(email)){
            if (password === confirmpass && password.length > 8){
                const response = {
                    email,password,isAgreementAggreed,isNotifyNewsletters,loginId
                }
                onDataFromChild(data,response);
            }
        }
    }
    // useEffect(() => {
    //     console.log(loginId,'nknfksfkndk');
    //   }, [loginId])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.RegisterPage}>
                    <View style={styles.subRegister}>
                        <View style={styles.heading}>
                            <Text style={styles.RegisterHead}>Registration</Text>
                        </View>

                        <View>
                            <Text style={styles.label}>Enter Address*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Username"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Password*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                secureTextEntry
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Confirm Password*</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                secureTextEntry
                                value={confirmpass}
                                onChangeText={(text) => setconfirmpass(text)}
                            />
                        </View>

                        <View style={styles.SubCheckBox}>
                            <CheckBox
                                value={isAgreementAggreed}
                                onValueChange={(newValue) => setIsAgreementAggreed(newValue)}
                                tintColors={{ true: '#99bbff', false: 'white' }}
                            />
                            <Text style={styles.checkText}>I agree with Terms & Conditions</Text>
                        </View>

                        <View style={styles.SubCheckBox}>
                            <CheckBox
                                value={isNotifyNewsletters}
                                onValueChange={(newValue) => setIsNotifyNewsletters(newValue)}
                                tintColors={{ true: '#99bbff', false: 'white' }}
                            />
                            <Text style={styles.checkText}>I want to receive NewsLetter</Text>
                        </View>

                        <View style={styles.buttonContaineer}>
                            <TouchableOpacity style={styles.button} onPress={() => sendValueParent(2)}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00203f',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    RegisterPage: {
        flex: 1,
        alignItems: 'center',
    },
    RegisterHead: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'inherit',
        fontWeight: '500'
    },
    heading: {
        marginTop: 20,
        display: 'flex',
        alignItems: "center",
        marginBottom: 30,
    },
    label: {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    },
    subRegister: {
        width: '80%',
    },
    input: {
        height: 40,
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
        margin: 12,
        width: 150, // Set a specific width if needed
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    SubCheckBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    checkText: {
        color: "white",
        fontSize: 18,
        fontWeight: '500'
    }
});

export default Register;
