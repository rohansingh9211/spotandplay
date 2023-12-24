import React from 'react'
import {View, Text, Button,StyleSheet,SafeAreaView,FlatList} from 'react-native'
import FacilityItem from './FacilityItem';


function FacilityList() {

 const Item = () => (
        <View >
          <FacilityItem/>
        </View>
      );


  return (
    
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1,2,3,4,5,6,7,8,9]}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      
  );
}

export default FacilityList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal:16
       
    },
    
})