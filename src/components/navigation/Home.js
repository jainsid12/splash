import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabHead from './TabHead';
import Button from '../Button';

const Home = ({navigation}) => {
  const [toogle, setToogle] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'rgb(242,242,242)'}}>
        {/* tab head */}
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <TabHead title="Home" style={{flex: 1, position: 'relative'}} />
          <TouchableOpacity
            style={style.infoImageContainer}
            onPress={() => navigation.navigate('Profile')}>
            <MaterialCommunityIcons
              name="account-circle"
              size={32}
              style={style.profile}
            />
          </TouchableOpacity>
        </View>
        {/*  */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1, padding: 14}}>
          {/* card 1 - challange */}
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
          {/* card 2 - Your Phone Distraction */}
          <Text style={style.cardHead}>Your Phone Distraction</Text>
          <View style={style.card}>
            <View style={{flexDirection: 'row'}}>
              <Text
                onPress={() => setToogle(!toogle)}
                style={[
                  style.toogle,
                  {backgroundColor: !toogle ? 'rgb(232,232,232)' : null},
                ]}>
                Week
              </Text>
              <Text
                onPress={() => setToogle(!toogle)}
                style={[
                  style.toogle,
                  {backgroundColor: toogle ? 'rgb(232,232,232)' : null},
                ]}>
                Today
              </Text>
            </View>
            <Text
              style={[
                style.lgText,
                {textAlign: 'center', borderBottomWidth: 0},
              ]}>
              Total phone distraction duration
            </Text>
            <Text style={{textAlign: 'center', fontSize: 15}}>
              -- <Text style={{color: 'rgb(177,177,177)'}}>min</Text>
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/time.png')}
                style={style.waitingImage}
              />
              <Text style={{fontSize: 15, paddingVertical: 16}}>
                Waiting for your trips{'  '}
                <Text style={{color: 'rgb(246,209,56)'}}>See details</Text>
              </Text>
            </View>
            <View style={style.button}>
              <Button
                text="Learn how to improve"
                type="disable"
                // size="lg"
                onPress={() => navigation.navigate('Highlights')}
              />
            </View>
          </View>
          {/* card 3 - last trip */}
          <Text style={style.cardHead}>Last Trip</Text>
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
              <Text style={{color: 'rgb(225,80,64)', fontWeight: '700'}}>
                Waiting for your trips
              </Text>
            </View>
          </View>
          {/* card 4 - Knowledge bits */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.cardHead}>Knowledge Bites</Text>
            <TouchableOpacity
              onPress={() => navigation.jumpTo('KnowledgeBites')}
              style={{flexDirection: 'row'}}>
              <Text
                style={[style.cardHead, {fontSize: 16, alignSelf: 'center'}]}>
                Read More{' '}
              </Text>
              <MaterialCommunityIcons
                name="arrow-right"
                size={23}
                style={style.next}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.jumpTo('KnowledgeBites')}
            style={[style.card, {marginBottom: 34, padding: 0}]}>
            <Image
              source={require('../../assets/knowledge_bits6.png')}
              style={{borderTopLeftRadius: 12}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 14,
              }}>
              <Text style={{fontWeight: '700'}}>
                Moving from knowledge to wisdom
              </Text>
              <MaterialCommunityIcons
                name="arrow-right"
                size={18}
                style={style.next}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  infoImageContainer: {
    borderBottomColor: 'lightgrey',
    position: 'absolute',
    alignSelf: 'center',
    paddingLeft: 10,
  },
  infoImage: {
    width: 22,
    height: 22,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
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
  cardHead: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 18,
  },
  toogle: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 6,
    borderRadius: 4,
  },
  waitingImage: {
    width: 16,
    height: 16,
    marginHorizontal: 6,
    alignSelf: 'center',
  },
  button: {
    marginTop: 10,
  },
  profile: {
    alignSelf: 'center',
  },
  next: {
    alignSelf: 'center',
  },
});

export default Home;
