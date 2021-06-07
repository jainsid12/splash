import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';

const TnC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={require('../../assets/logo.png')} style={style.logo} />
          <Text style={[style.head, {fontSize: 22}]}>Welcome to RAC!</Text>
          <Text>
            Before we get started, here’s a simplified version of our{' '}
            <Text style={style.primary}>privacy policy</Text> and how we use
            your personal information.
          </Text>
          <Text style={style.head}>BACKGROUND</Text>
          <Text>
            Safer Driver is an app built by{' '}
            <Text style={style.primary}>Sentiance</Text>
            and <Text style={style.primary}>RAC</Text> that provides driver
            coaching based on your driving behavior, travel habits, and similar
            information. In order to provide you with some of this information,
            we require app permissions.
          </Text>
          <Text style={style.head}>DATA WE USE</Text>
          {/* <View> */}
          <Image
            source={require('../../assets/data_use_tnc.png')}
            style={style.image}
          />
          {/* </View> */}
          <Text style={style.head}>HOW WE USE IT</Text>
          <Text>
            {`Using your data, Safer Driver can provide you with rich behavioral insights and let’s you analyze the driving behavior aspects of your life. The data collected by Sentiance will be shared shared with RAC.\n\nThis information also helps us to train our software to give you and other users more accurate coaching.\n\nYou can request deletion or a copy of the data you provided, or stop any collection of data by removing the app from your phone.\n\nWe encourage you to review our full privacy policy, or ask any question regarding privacy via `}
            <Text style={style.primary}>privacy@sentiance.com.</Text>
          </Text>
          <View style={style.button}>
            <Button
              text="Accept & proceed"
              type="active"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  head: {
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 22,
  },
  primary: {
    color: 'rgb(248, 209, 71)',
  },
  image: {
    height: 120,
    width: '100%',
    alignSelf: 'center',
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
  },
});

export default TnC;
