import React, { useState,useEffect } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Register from "./Register";
import PlayerInfo from "./PlayerInfo";
import Contact from "./Contact";
function RegisterContainer(): React.JSX.Element {
    const [navigate, setNavigate] = useState(1);
    const [getAllDetail, setGetAllDetail] = useState({});

    const handleDataFromChild1 = (data: number,response:any) => {
        setGetAllDetail({...getAllDetail, ...response})
        setNavigate(data);
        
      };
    const handleDataFromChild2=(data: number,data2:any)=>{
        setGetAllDetail({...getAllDetail, ...data2});
        setNavigate(data);
    }
    useEffect(() => {
        console.log(getAllDetail);
      }, [getAllDetail])
    return (
        <>
            {navigate === 1 && (
                <Register onDataFromChild={handleDataFromChild1}/>
            )}
            {navigate === 2 && (
                <PlayerInfo onDataFromChild={handleDataFromChild2 } navigation={undefined}/>
            )}
            {navigate === 3 && (
                <Contact propData={getAllDetail} navigation={navigate}/>    
            )}
        </>
    )
}
export default RegisterContainer;