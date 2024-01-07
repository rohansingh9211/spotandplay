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
import { isLoginUser } from '../../Redux/Action/Useraction'
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


function Login({ navigation }: { navigation: any }): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, SetValidate] = useState(true);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const isLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username.length > 5 && password.length > 5) {
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
    <ScrollView style={styles.loginContaineer}>
      <LinearGradient colors={['rgba(16, 34, 80, 1)', 'rgba(69, 92, 148, 1)', 'rgba(16, 34, 80, 1)']} style={styles.linearGradient}>

        <View style={styles.childLogin}>
          <View style={styles.secondChildLogin}>
            <Image source={require('../../../assets/images/spot.png')} />
            <View style={{ marginTop: -60 }}>
              <Text style={styles.headingName}>
                Sign-In
              </Text>
            </View>
            <View style={{ width: "100%", marginVertical: 10 }}>
              <Text style={styles.labelText}>
                Username
              </Text>
              <View style={styles.textFeild}>
                <Feather name='user' color={'rgba(0, 0, 0, 0.35)'} size={18}></Feather>
                <TextInput style={{ width: "90%" }}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                >
                </TextInput>
              </View>
            </View>
            <View style={{ width: "100%", marginVertical: 10 }}>
              <Text style={styles.labelText}>
                Password
              </Text>
              <View style={styles.textFeild}>
                <Feather name='lock' color={'rgba(0, 0, 0, 0.35)'} size={18}></Feather>
                <TextInput style={{ width: "90%" }}
                  placeholder="Password"
                  value={password}
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                >
                </TextInput>
              </View>
            </View>
            <View style={{ width: "100%", marginVertical: 10, alignItems: "center" }}>
              <TouchableOpacity>
                <Text style={{
                  fontFamily: 'Roboto',
                  fontWeight: "500", fontSize: 16,
                  color: "rgba(255, 255, 255, 1)",
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(255, 255, 255, 1)"
                }}>
                  Forget Password ?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttoncont}>
              <TouchableOpacity onPress={isLogin} >
                <Text style={{
                  fontFamily: 'Inter',
                  fontWeight: "500", fontSize: 22,
                  color: "rgba(255, 255, 255, 1)",
                  alignItems: "center"
                }}>
                  Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: "90%",
              marginVertical: 10,
              alignItems: "center",
            }}>
              <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
                <View style={{ width: "40%", borderWidth: 0.5, borderColor: "white", height: 0 }}></View>
                <Text style={{ fontFamily: "Inter", fontWeight: "700", fontSize: 20, color: "rgba(255, 255, 255, 1)", marginHorizontal: 3 }}>OR</Text>
                <View style={{ width: "40%", borderWidth: 0.5, borderColor: "white", height: 0 }}></View>
              </View>
            </View>
            <View style={{
              marginVertical: 5,
            }}>
              <Text style={styles.headingName}>
                Sign-up with
              </Text>
            </View>
            <View style={{
              marginVertical: 5,
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}>
              <Image source={require('../../../assets/images/facebooklogo.png')}></Image>
              <Image source={require('../../../assets/images/googlelogo.png')}></Image>
            </View>
            <View style={{
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "center"
            }}>
              <Text style={{
                fontFamily: 'Roboto',
                fontWeight: "500", fontSize: 16,
                color: "rgba(255, 255, 255, 1)",
              }}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => { navigation.navigate("RegisterContainer") }}>
                <Text style={styles.linkSign}>
                  sign-up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text style={{ fontFamily: "Inter", fontSize: 14, color: "rgba(255, 255, 255, 1)" }}>
              Powered by Spot and play
            </Text>
            <Image source={require('../../../assets/images/spot.png')} style={{ width: 35, height: 35 }}></Image>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginContaineer: {
    flex: 1,
    backgroundColor: "rgba(69, 92, 148, 1)"
  },
  childLogin: {
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  secondChildLogin: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  headingName: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: '700',
    color: "background: rgba(255, 255, 255, 1)",
    lineHeight: 28.13,
  },
  labelText: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 18.75,
    color: "rgba(255, 255, 255, 1)"
  },
  textFeild: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 20,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 17.89,
    lineHeight: 20.96,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  buttoncont: {
    width: "90%",
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "rgba(255, 153, 51, 1)",
    padding: 8,
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  linkSign: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: '700',
    color: "background: rgba(255, 255, 255, 1)",
    lineHeight: 28.13,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 1)",
    marginHorizontal: 8
  }

});

export default Login;
