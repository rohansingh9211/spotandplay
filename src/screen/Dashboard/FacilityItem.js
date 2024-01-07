import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


function FacilityItem() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image source={{uri:'https://images.pexels.com/photos/8007157/pexels-photo-8007157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={styles.img} />
          <View style={{flexDirection:"column"}}>
            <Text style={{color:"rgba(0, 0, 0, 0.75)",fontWeight:"900",fontSize:16,lineHeight:18,fontFamily:"Roboto",textAlign:"left"}}>
              Grand Sports
            </Text>
            <Text style={{color:"rgba(0, 0, 0, 0.75)",fontWeight:"700",fontSize:12,lineHeight:18,fontFamily:"Roboto",textAlign:"left"}}>
              sports available
            </Text>
            <Text style={{color:"rgba(0, 0, 0, 0.75)",fontWeight:"500",fontSize:12,lineHeight:18,fontFamily:"Roboto",textAlign:"left",flexWrap: "wrap"}}>
            Cricket, Tennis,  
            </Text>
          </View>
        </View>
        <Ionicons name='star' style={styles.img2} size={30} color={'rgba(0, 0, 0, 0.65)'} />
        <View style={{flexDirection:"row",position:"absolute",bottom:5,right:5}}>
          <Ionicons name='navigate' color={'rgba(65, 156, 207, 0.76)'} size={18}></Ionicons>
          <Text style={{color:"rgba(0, 0, 0, 0.75)",fontWeight:"500",fontSize:12,lineHeight:18,fontFamily:"Roboto",textAlign:"left"}}>
            Hyderabad
          </Text>
        </View>
      </View>

    </View>
  );
}

export default FacilityItem;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    margin: 5,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    position:"relative"
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: '#e25924',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius:10
  },

  text: {
    color: 'rgba(0, 0, 0, 0.75)',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18
  },
  img2: {
    position:"absolute",
    right:5,
    top:5
  },

})