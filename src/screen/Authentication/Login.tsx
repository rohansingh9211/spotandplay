import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {isLoginUser} from '../../Redux/Action/Useraction'

function Login({navigation}: {navigation: any}): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, SetValidate] = useState(true);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const isLogin=async ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.length > 5 &&  password.length > 5) {
    try {
      const res = await isLoginUser(username, password);
      console.log(res);
      
      navigation.navigate('MainContainer')
    } catch (error) {
      Alert.alert('Error', 'Invalid username or password');
    } 
    } else {
      SetValidate(false);
      setUsername('');
      setPassword('');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.loginPage}>
        <Image source={require('../../../assets/images/spot.png')} />
        <View style={styles.subLogin}>
          <View style={styles.heading}>
            <TouchableOpacity>
              <Text style={styles.loginHead}>Sign in</Text>
              <Text style={{ fontWeight: '600', fontSize: 20, color: 'white' }}>
                New User ?{' '}
                <Text
                  style={{ fontWeight: '600', fontSize: 20, color: 'goldenrod' }}
                  onPress={() => navigation.navigate('RegisterContainer')}
                >
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={[styles.label, { color: valid ? 'white' : 'red' }]}>Enter Address*</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View>
            <Text style={[styles.label, { color: valid ? 'white' : 'red' }]}>Password*</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.buttonContaineer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text
                style={styles.buttonText}
                onPress={() => isLogin()}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#00203f',
  },
  loginPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginHead: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'inherit',
    fontWeight: '700',
  },
  heading: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  subLogin: {
    width: '90%',
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
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Login;
