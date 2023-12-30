import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Image,FlatList } from 'react-native';
import { MainContainer } from './MainContainer'
import CustomHeader from '../../Component/CustomHeader'

const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    { key: '3', text: 'Item 3' },
    { key: '3', text: 'Item 3' },
    { key: '3', text: 'Item 3' },
    { key: '3', text: 'Item 3' },
    // Add more items as needed
  ];
export default function FavouriteScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.mainBoxFav}>
                <Image source={{
                    uri: 'https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
                  style={styles.image}  
                />
                <Text style={{color:"white",fontSize:25,fontFamily:'serif'}}>new</Text>
        </View>
    );

    return (
        <View style={styles.favContaineer}>
            <CustomHeader title = "Favourite" />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    favContaineer: {
      flex: 1,
      backgroundColor: "white",
    },
    image: {
      width: 90,
      height: 90,
      marginHorizontal:5,
      borderRadius:10,
    },
    mainBoxFav: {
      backgroundColor: "#022D36",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: 5,
      borderRadius:10,
      margin:5
    },
  });
  