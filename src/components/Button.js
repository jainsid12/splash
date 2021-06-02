import React from 'react';
import {Pressable, View, Text, StyleSheet, Dimensions} from 'react-native';

const Button = props => {
  const {text, transparent, size} = props;
  const width = {
    sm: 120,
    md: 180,
    lg: 370,
  };

  return (
    <View style={style(transparent, width[size]).container}>
      {/* <Pressable style={style(transparent).button}> */}
      <Text style={style().buttonText}>{text}</Text>
      {/* </Pressable> */}
    </View>
  );
};

const style = (transparent, size) =>
  StyleSheet.create({
    container: {
      width: size,
      marginTop: 'auto',
      marginBottom: 20,
      backgroundColor: transparent ? null : 'rgb(248, 209, 71)',
      margin: 12,
      borderWidth: 2,
      borderRadius: 6,
      borderColor: transparent ? null : 'rgb(248, 209, 71)',
    },
    // button: {
    //   backgroundColor: transparent ? 'rgb(248, 209, 71)' : null,
    //   margin: 12,
    //   borderWidth: 2,
    //   borderRadius: 6,
    //   borderColor: transparent ? 'rgb(248, 209, 71)' : null,
    // },
    buttonText: {
      fontSize: 16,
      padding: 12,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

export default Button;
