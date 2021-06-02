import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const KnowledgeBitesCard = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.card}
      onPress={() => navigation.navigate('KnowledgeBites_details1')}>
      <View>
        {props.children}
        <View style={style.footer}>
          <Text style={style.text}>{props.footer}</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={18}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
  },
  text: {fontWeight: '700', fontSize: 16},
});

export default KnowledgeBitesCard;
