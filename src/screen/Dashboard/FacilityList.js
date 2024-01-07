import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import FacilityItem from './FacilityItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CustomHeader from '../../Component/CustomHeader'
import HomeHeader from '../../Component/HomeHeader'
import LinearGradient from 'react-native-linear-gradient';
import gamesData from '../jsondata'


function FacilityList() {
  const [selectedItem, setSelectedItem] = useState("Sports");
  const [isGames, setGames] = useState(false)

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };
  const data =[1,2,3,4,5,6,7,8]

  const Item = () => (
    <View >
      <FacilityItem />
    </View>
  );



  return (

    <LinearGradient colors={['rgba(16, 34, 80, 1)', 'rgba(69, 92, 148, 1)', 'rgba(16, 34, 80, 1)']} style={styles.linearGradient}>
      <View style={styles.dashContaineer}>
        {/* <View style={{ transform: [{ rotate: '-10deg' }],position:"absolute",left:100,top:100}}>
          <View style={{backgroundColor:"rgba(255, 255, 255, 0.2)", width:"100%",height:25,marginVertical:2}}></View>
          <View style={{backgroundColor:"rgba(255, 255, 255, 0.2)", width:"100%",height:25,marginVertical:2}}></View>
          <View style={{backgroundColor:"rgba(255, 255, 255, 0.2)", width:"100%",height:25,marginVertical:2}}></View>
        </View> */}
        <HomeHeader />

        { !isGames ? ( 
        <View style={styles.gamesContaineer}>
          {gamesData.map((game, index) => (
            <TouchableOpacity key={index} style={styles.gamesDetail} onPress={()=>setGames(true)}>
              <Image source={game.image} />
              <Text style={{ fontSize: 16, color: "rgba(255, 255, 255, 1)", fontWeight: "800" }}>{game.name}</Text>
            </TouchableOpacity>
          ))}
        </View>):null}
        
        {isGames ? (
        <View style={{width:"90%"}}>
            <FlatList
              data={data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.toString()}
            />
        </View>
         ) : null}
      </View>
    </LinearGradient>

  );
}

export default FacilityList;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  gamesContaineer: {
    width: "90%",
    marginVertical: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    gap: 15
  },
  dashContaineer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  gamesDetail: {
    width: "30%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  }
})