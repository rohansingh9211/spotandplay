import React, { useState } from 'react';
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

function Register({ navigation }: Props): React.JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setconfirmpass] = useState('');
    const [isCheckedTna, setCheckedTna] = useState(false);
    const [isCheckedNews, setCheckedNews] = useState(false);

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

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
                                value={username}
                                onChangeText={(text) => setUsername(text)}
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
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <View style={styles.SubCheckBox}>
                            <CheckBox
                                value={isCheckedTna}
                                onValueChange={(newValue) => setCheckedTna(newValue)}
                                tintColors={{ true: '#99bbff', false: 'white' }}
                            />
                            <Text style={styles.checkText}>I agree with Terms & Conditions</Text>
                        </View>

                        <View style={styles.SubCheckBox}>
                            <CheckBox
                                value={isCheckedNews}
                                onValueChange={(newValue) => setCheckedNews(newValue)}
                                tintColors={{ true: '#99bbff', false: 'white' }}
                            />
                            <Text style={styles.checkText}>I want to receive NewsLetter</Text>
                        </View>

                        <View style={styles.buttonContaineer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
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
