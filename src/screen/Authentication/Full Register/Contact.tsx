import React, { useState,useEffect } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { isRegistered } from '../../../Redux/Action/Useraction';

const Contact = (props:any ,{navigation}: {navigation: any}) => {
    // const [address1,setAddress1] = useState('');
    // const [address2,setAddress2] = useState('');

    // const [city,setCity] = useState('');
    // const [state,setState] = useState('');
    // const [zipcode,setZipcode] = useState('');

    // const [address1,setAddress1] = useState('');
    const [getAllDetail, setGetAllDetail] = useState({
        // Other properties...
        address: {
          address1: "string",
          address2: "string",
          city: "string",
          state: "string",
          zipcode: "string",
          country: "string",
          time_zone: "Asia/Kolkata",
          longitude: "string",
          lattitude: "string"
        }
      });
      const [getPhoneDetail, setGetPhoneDetail] = useState({
        // Other properties...
        customerPhones: [
          {
            phoneNumber: "8197594997",
            phoneType: "Cell"
          }
          // You can have more items in the array if needed
        ]
      });
      const [selfRegistration,SetSelfRegistration] = useState(true);
      const [manage,setManage] = useState({})
//       "referingFacilityId": 0,
//   "referingRetailerId": 0,
      

    const RegisterHandle=async ()=>{
        setManage(prevManage => ({
            ...prevManage,
            ...props.propData,
            ...getAllDetail,
            ...getPhoneDetail,
            selfRegistration: true,
            referingFacilityId: 0,
            referingRetailerId: 0,
          }));
          
          try {
            const res = await isRegistered(manage);
            console.log(res,'---------------------------res');
            
            if(res == 200){
                Alert.alert("Register successfull")
                navigation.navigate('Login')
            }
          } catch (error) {
            console.log('error');
          }         
    }
    
    const sendValueParent = (data:number) => {
        // onDataFromChild(2);
      };
      useEffect(() => {
        console.log(manage,'---nkdnfkdn');
      }, [manage])
    return (
        <ScrollView style={styles.contactContaineer}>
            <View style={{alignItems:"center"}}>
                <View style={styles.contactContaineerfirst}>
                    <View style={{alignItems:"center",marginVertical:10}}>
                        <Text style={styles.Heading}>Contact Details</Text>
                    </View>
                    <View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Emails*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="Email"
                            ></TextInput>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Phone type(Primary)
                            </Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{width:"20%",backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                                <Text style={{fontSize:15}}>Cell</Text>
                                </View>
                                <TextInput style={{width:"70%",backgroundColor:"white",borderRadius:10}}
                                    placeholder="Primary"
                                ></TextInput>
                            </View>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Phone type(Alternate)
                            </Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{width:"20%",backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                                <Text style={{fontSize:15}}>Home</Text>
                                </View>
                                <TextInput style={{width:"70%",backgroundColor:"white",borderRadius:10}}
                                    placeholder="Alternate"
                                ></TextInput>
                            </View>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Location*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="Location"
                            ></TextInput>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Address*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="Address"
                            ></TextInput>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                City*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="City"
                            ></TextInput>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                State*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="State"
                            ></TextInput>
                        </View>
                        <View style={styles.inputSubCont}>
                            <Text style={styles.label}>
                                Postal Code*
                            </Text>
                            <TextInput style={styles.textFeild}
                                placeholder="Postal Code"
                            ></TextInput>
                        </View>
                        <View style={styles.buttoncont}>
                            <TouchableOpacity style={styles.button} onPress={()=>sendValueParent(2)}>
                                <Text style={styles.label}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=>RegisterHandle()} >
                                <Text style={styles.label}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contactContaineer: {
        flexGrow: 1,
        backgroundColor: "#00203f",
    },
    contactContaineerfirst: {
        justifyContent: "center",
        width: "90%",
        // borderWidth: 2,
        // borderColor: "red"
    },
    Heading: {
        fontSize: 30,
        fontWeight: "600",
        fontFamily: "fantasy",
        color: "white"
    },
    inputSubCont:{
        marginVertical:5
    },
    textFeild:{
        backgroundColor:"white",
        borderRadius:10,
        fontSize:15,
    },
    label: {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    },
    buttoncont:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginVertical:15
    },
    button:{
        backgroundColor:"goldenrod",
        width:"40%",
        padding:10,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default Contact
