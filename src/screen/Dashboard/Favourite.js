import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native'
import { MainContainer } from './MainContainer'
import CustomHeader from '../../Component/CustomHeader'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';



const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  // Add more items as needed
];
export default function FavouriteScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: 'https://images.pexels.com/photos/8007157/pexels-photo-8007157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.img} />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "rgba(0, 0, 0, 0.75)", fontWeight: "900", fontSize: 16, lineHeight: 18, fontFamily: "Roboto", textAlign: "left" }}>
              Grand Sports
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.75)", fontWeight: "700", fontSize: 12, lineHeight: 18, fontFamily: "Roboto", textAlign: "left" }}>
              sports available
            </Text>
            <Text style={{ color: "rgba(0, 0, 0, 0.75)", fontWeight: "500", fontSize: 12, lineHeight: 18, fontFamily: "Roboto", textAlign: "left", flexWrap: "wrap" }}>
              Cricket, Tennis,
            </Text>
          </View>
        </View>
        <Ionicons name='star' style={styles.img2} size={30} color={'goldenrod'} />
        <View style={{ flexDirection: "row", position: "absolute", bottom: 5, right: 5 }}>
          <Ionicons name='navigate' color={'rgba(65, 156, 207, 0.76)'} size={18}></Ionicons>
          <Text style={{ color: "rgba(0, 0, 0, 0.75)", fontWeight: "500", fontSize: 12, lineHeight: 18, fontFamily: "Roboto", textAlign: "left" }}>
            Hyderabad
          </Text>
        </View>
      </View>
    </View>
  );

  return (

    <View style={styles.favContaineer}>
      <LinearGradient colors={['rgba(16, 34, 80, 1)', 'rgba(69, 92, 148, 1)', 'rgba(16, 34, 80, 1)']} style={{ flex: 1 }}>

        <CustomHeader title="Favourite" />
        <View style={styles.logoImage}>
          <Image source={require('../../../assets/images/spot.png')} style={{ width: 150, height: 150, position: "absolute", top: 0 }} />
          <TouchableOpacity style={{ position: "absolute", right: 15, top: 35 }}>
            <Ionicons name='log-out-outline' color={'white'} size={30}></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 10 }}>
          <Text style={{ fontSize: 25, color: "rgba(255, 255, 255, 1)" }}>Favourite</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          contentContainerStyle={styles.containers}
        />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  favContaineer: {
    flex: 1,
    backgroundColor: "white",
  },
  logoImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    alignContent: "center",
    height: 100,
    width: '100%',
    position: "relative"
  },
  image: {
    width: 90,
    height: 90,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  mainBoxFav: {
    backgroundColor: "#022D36",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
    borderRadius: 10,
    margin: 5
  },
  container: {
    height: 120,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    margin: 5,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    position: "relative"
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: '#e25924',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10
  },

  text: {
    color: 'rgba(0, 0, 0, 0.75)',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18
  },
  img2: {
    position: "absolute",
    right: 5,
    top: 5
  },

});
