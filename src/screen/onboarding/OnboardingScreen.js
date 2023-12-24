import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image,SafeAreaView } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../../../Utils/asyncStorage';



const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Login');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Let’s Go</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.imgView}>
        <Image  style={styles.img} source={require('../../../assets/images/spot.png')}/>
        </View>
        <View style={styles.subContainer}>
            <View style={styles.textView}>
            <Text style={styles.text}>Ready to Play ?</Text>

            </View>

       <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#ffffff',
                    
                    image: (
                        <View style={styles.lottie}>
                            <Image  source={require('../../../assets/images/football.png')}/>
                        </View>
                    ),
                    // title: 'Choose the facility and ',
                    // subtitle: 'select your game',
                },
                {
                    backgroundColor: '#ffffff',
                    image: (
                        <View style={styles.lottie1}>
                     <Image source={require('../../../assets/images/date.png')}/>    
                  </View>
                    ),
                    // title: 'Select date and time',
                    // subtitle: 'Book your slot',
                },
                {
                    backgroundColor: '#ffffff',
                    image: (
                        <View style={styles.lottie2}>
                            <Image source={require('../../../assets/images/players.png')}/>
                        </View>
                    ),
                    // title: 'Invite your Friends and',
                    // subtitle: 'Enjoy',
                },
            ]}
        /> 
        </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455C94',
        
    },
    subContainer: {

        backgroundColor: '#ffffff',
        flex: 2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    imgView:{
        backgroundColor: '#455C94',
        alignItems:'center',
        flex:0.5
       },
       textView:{
        alignItems:'center',
       },
       text:{
        color: '#455C94',
        fontSize:18,
        marginTop:10,
       
       },
    img:{
    marginTop:5,
    },
    lottieView:{
        justifyContent:'center',
        alignItems:'flex-start',
        
    },
    lottie:{
        width: 236,
        height: 236,
        
        // backgroundColor: 'white'
    },
    lottie1:{
        width: 218,
        height: 218,
        
        // backgroundColor: 'white'
    },
    lottie2:{
        width: 294,
        height: 294,
        // backgroundColor: 'white'
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    },
    
})