import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <TouchableOpacity onPress={goBack} style={{ position: 'absolute', left: 10 }}>
        {/* <Ionicons name="arrow-back" size={24} color="black" /> */}
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default CustomHeader;