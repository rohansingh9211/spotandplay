import React, { useState, useEffect } from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

interface register {
    onDataFromChild: (data: any) => void
}
const Register: React.FC<register> = ({ onDataFromChild }): React.ReactElement => {
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
        console.log(loginId, 'loginId  ---');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            if (password === confirmpass && password.length > 8) {
                const response = {
                    email, password, isAgreementAggreed, isNotifyNewsletters, loginId
                }
                onDataFromChild(data);
            }
        }
    }
    // useEffect(() => {
    //     console.log(loginId,'nknfksfkndk');
    //   }, [loginId])
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['rgba(16, 34, 80, 1)', 'rgba(69, 92, 148, 1)', 'rgba(16, 34, 80, 1)']} style={styles.linearGradient}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.RegisterPage}>
                    <View style={styles.subRegister}>
                        <View style={styles.heading}>
                            <Text style={styles.RegisterHead}>Registration</Text>
                        </View>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.label}>Enter Address*</Text>
                            <View style={styles.input}>
                                <Feather name='user' color={'rgba(0, 0, 0, 0.35)'} size={18}></Feather>
                                <TextInput style={{ width: "90%" }}
                                    placeholder="Username"
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                >
                                </TextInput>
                            </View>
                        </View>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.label}>Password*</Text>
                            <View style={styles.input}>
                                <Feather name='lock' color={'rgba(0, 0, 0, 0.35)'} size={18}></Feather>
                                <TextInput style={{ width: "90%" }}
                                    placeholder="Password"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.label}>Confirm Password*</Text>
                            <View style={styles.input}>
                                <Feather name='lock' color={'rgba(0, 0, 0, 0.35)'} size={18}></Feather>
                                <TextInput style={{ width: "90%" }}
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                    value={confirmpass}
                                    onChangeText={(text) => setconfirmpass(text)}>
                                </TextInput>
                            </View>
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
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(69, 92, 148, 1)',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    RegisterPage: {
        flex: 1,
        alignItems: 'center',
    },
    RegisterHead: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Roboto',
        fontWeight: '600',
        lineHeight:28,
    },
    heading: {
        marginVertical: 30,
        display: 'flex',
        alignItems: "center",
        marginBottom: 30,
    },
    label: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 18.75,
        color: "rgba(255, 255, 255, 1)"
    },
    subRegister: {
        width: '90%',
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: 20,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 17.89,
        lineHeight: 20.96,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 4,
        shadowColor: 'red',
        elevation: 10,
        
    },
    buttonContaineer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'rgba(255, 153, 51, 1)',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        margin: 12,
        width: '90%', 
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10,
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
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontWeight: '400',
        fontFamily:'Roboto'
    }
});

export default Register;
