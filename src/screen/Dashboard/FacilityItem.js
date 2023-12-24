import React from 'react'
import {View, Text, Button,Image,StyleSheet} from 'react-native'


function FacilityItem() {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
         <Image style={styles.img} />
         <Text style={styles.text}>
            Grand Sports
         </Text>
         <Image style={styles.img2} />
        </View>
       
    </View>
  );
}

export default FacilityItem;

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:120,
        backgroundColor:'#022D36',
        borderRadius:5,
        marginTop:8,
        flex:1
    },
    subContainer:{
     flexDirection:'row',
     justifyContent:'space-around'
    },
    img:{
        width:100,
        height:100,
        backgroundColor:'#e25924',
        marginHorizontal:10,
        marginTop:10
    },

   text:{
    color:'#ffffff',
    marginLeft:10,
    marginTop:5,
    fontSize:18
   },
   img2:{
    width:20,
    height:20,
    backgroundColor:'#e25924',
    marginLeft:10,
    marginTop:8
},

})