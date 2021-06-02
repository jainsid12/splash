import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TabHead from './TabHead';

const Trips = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {/* tab header */}
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <TabHead title="Trips" style={{flex: 1, position: 'relative'}} />
          <View style={style.infoImageContainer}>
            <Image
              source={require('../../assets/info.png')}
              style={style.infoImage}
            />
          </View>
        </View>
        {/*  */}
        <View style={{padding: 14}}>
          <Image
            source={require('../../assets/missing.png')}
            style={style.missing}
          />
          <View style={style.card}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingVertical: 18,
              }}>
              <Image
                source={require('../../assets/time.png')}
                style={style.waitingImage}
              />
              <Text
                style={{
                  color: 'rgb(172,172,172)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                No trips yet!
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  infoImageContainer: {
    borderBottomColor: 'lightgrey',
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
    paddingRight: 8,
  },
  infoImage: {
    width: 22,
    height: 22,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  missing: {
    height: 130,
    width: 130,
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 50,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
  },
  waitingImage: {
    width: 16,
    height: 16,
    marginHorizontal: 6,
    alignSelf: 'center',
  },
});

export default Trips;
