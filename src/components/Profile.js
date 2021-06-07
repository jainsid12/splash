import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import Button from './Button';

const Profile = () => {
  const logoff = () => {
    // setVisible(false);
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(err => console.log(err));
  };

  const bgColor = 'rgb(235,76,65)';
  let info = (key, value, color) => (
    <View style={style.info}>
      <Text style={{fontSize: 16, color: color}}>{key}</Text>
      <Text style={{fontSize: 14}}>{value}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'rgb(242,242,242)'}}>
          <View style={style.profileImage}>
            <Text style={style.profileImageText}>R</Text>
          </View>
          <Text style={style.email}>randomemail@gmail.com</Text>
        </View>
        {info('SDK Status', 'INITIALIZED')}
        {info('SDK User ID', '60951f72aa01ac07000000ab')}
        {info('User ID', 'ba3868c6-3bbb-4e3d-ae5c-1087524152a4')}
        {info('Version', '1.0.2 (513)')}
        <TouchableOpacity>
          {info('Change Password', '', 'rgb(235,76,65)')}
        </TouchableOpacity>
        <TouchableOpacity onPress={logoff}>
          {info('Logout', '', 'rgb(235,76,65)')}
        </TouchableOpacity>
        <View style={style.footer}>
          <View style={style.feedback}>
            <Text style={style.footerHead}>How did we do?</Text>
            <Text style={style.message}>
              The best praise you can give us is to share your opinion about the
              app.
            </Text>
            <View>
              {/* <Text style={style.buttonText}>Give feedback</Text> */}
              <Button
                text="Give feedback"
                type="active"
                onPress={() => console.log('open feedback model')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  profileImage: {
    textAlign: 'center',
    backgroundColor: 'rgb(248, 209, 71)',
    height: 80,
    width: 80,
    alignSelf: 'center',
    textAlignVertical: 'center',
    borderRadius: 40,
    marginVertical: 46,
  },
  profileImageText: {
    flexDirection: 'column',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '700',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  email: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 40,
  },
  info: {
    flexDirection: 'row',
    backgroundColor: 'rgb(242,242,242)',
    justifyContent: 'space-between',
    padding: 12,
    marginTop: 4,
  },
  footer: {
    marginTop: 4,
    backgroundColor: 'rgb(242,242,242)',
    padding: 12,
  },
  feedback: {
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  footerHead: {
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 14,
    textAlign: 'center',
  },
  message: {
    color: 'rgb(196,196,196)',
    textAlign: 'center',
    paddingBottom: 14,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: 'rgb(248, 209, 71)',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Profile;
