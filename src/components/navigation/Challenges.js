import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import TabHead from './TabHead';

const Challenges = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TabHead title="Challenges" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, padding: 16}}>
          <View style={style.card}>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Highlights</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.lgCount}>0</Text>
              <Text style={style.lgCount}>0</Text>
              <Text style={style.lgCount}>0</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.countText}>Safe {'\n'}Trips</Text>
              <Text style={style.countText}>Safe {'\n'}Meters</Text>
              <Text style={style.countText}>Completed{'\n'} Challenges</Text>
            </View>
          </View>
          {/*  */}
          <Text style={style.cardHead}>Your Phone Distraction</Text>
          <View style={style.card}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 15, fontWeight: '700'}}>Challenge</Text>
              <Image
                source={require('../../assets/info.png')}
                style={{width: 18, height: 18}}
              />
            </View>
            <Text style={style.lgText}>
              The next trip in your car will be without using your phone. Deal?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 7,
                marginTop: 12,
              }}>
              <View style={style.progressBar}></View>
              <Text
                style={{
                  color: 'rgb(221,120,47)',
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                0 % completed
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  lgCount: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 16,
    fontWeight: '700',
  },
  countText: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 19,
    fontSize: 16,
    paddingBottom: 20,
  },
  cardHead: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 18,
  },
  lgText: {
    fontSize: 20,
    borderBottomColor: 'rgb(240,240,240)',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  progressBar: {
    width: 180,
    height: 6,
    backgroundColor: 'rgb(232,232,232)',
    borderRadius: 3,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default Challenges;
