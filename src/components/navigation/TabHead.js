import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const TabHead = props => (
  <Text style={[style.tabHead, props.style]}>{props.title}</Text>
);

const style = StyleSheet.create({
  tabHead: {
    textAlign: 'center',
    fontSize: 22,
    padding: 14,
    fontWeight: '700',
    backgroundColor: 'white',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});
export default TabHead;
