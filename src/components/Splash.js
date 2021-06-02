import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Container'), 4000);
  });
  return (
    <View style={{flex: 1}}>
      <Image source={require('../assets/logo.png')} style={style.image} />
      <Text style={style.text}>sentiance</Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: '70%',
    marginBottom: 'auto',
  },
  text: {
    fontSize: 28,
    marginBottom: '20%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default Splash;
