import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = props => {
  const {text, type, size} = props;
  const width = {
    sm: 120,
    md: 180,
    lg: 370,
  };
  const bgColor = {
    disable: 'rgb(175,175,175)',
    active: 'rgb(248, 209, 71)',
  };
  return (
    <TouchableOpacity
      style={style(bgColor[type], width[size]).container}
      onPress={() => (props.onPress ? props.onPress() : null)}>
      <Text style={style().buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = (type, size) =>
  StyleSheet.create({
    container: {
      width: size,
      backgroundColor: type,
      borderWidth: 2,
      borderRadius: 6,
      borderColor: type,
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 12,
    },
  });

export default Button;
