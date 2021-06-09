import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  Modal,
} from 'react-native';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';

const Register = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <GestureRecognizer onSwipeDown={() => props.closeRegister()}>
      <Modal
        visible={props.openRegister}
        animationType="slide"
        onRequestClose={() => props.closeRegister()}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(26,26,26,0.95)'}}>
          <View style={style.container}>
            {/* close  */}

            <View style={style.close}>
              <View style={{flex: 1}}>
                <Text style={style.slider}></Text>
              </View>
              <Pressable
                style={style.crossContainer}
                onPress={() => props.closeRegister()}>
                <Image
                  source={require('../../assets/cross.png')}
                  style={style.cross}
                />
              </Pressable>
            </View>

            {/* header */}
            <View style={{alignItems: 'center'}}>
              <Text style={style.headerText}>Register</Text>
            </View>

            {/* credentials input */}
            <TextInput
              placeholder="Your Name"
              style={[style.input, {padding: 16}]}
              placeholderTextColor="#AFAFAF"
            />

            <TextInput
              placeholder="Email address"
              keyboardType="email-address"
              style={[style.input, {padding: 16}]}
              placeholderTextColor="#AFAFAF"
            />
            <View style={style.input}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={{padding: 16, fontSize: 16, width: '100%'}}
                placeholderTextColor="#AFAFAF"
              />
              {passwordVisible ? (
                <Pressable
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  // android_ripple={{color: 'grey'}}
                  style={style.visibility}>
                  <Image source={require('../../assets/visibility.png')} />
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  // android_ripple={{color: 'grey'}}
                  style={style.visibility}>
                  <Image source={require('../../assets/hide.png')} />
                </Pressable>
              )}
            </View>
            {/*  */}
            <View style={{marginVertical: 22}}>
              <Button
                text="Get started"
                size="lg"
                type="disable"
                onPress={() => {
                  navigation.navigate('BottomTab'), props.closeRegister();
                }}
              />
            </View>

            {/* footer */}
            <View style={style.footer}>
              <Text style={style.footerText}>Already have an account?</Text>
              <View>
                <Button
                  text="Login"
                  transparent={true}
                  size="sm"
                  onPress={() => navigation.navigate('Container')}
                />
              </View>
            </View>
            {/*  */}
          </View>
        </SafeAreaView>
      </Modal>
    </GestureRecognizer>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 'auto',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: 'white',
  },
  close: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  slider: {
    width: 140,
    height: 8,
    backgroundColor: 'rgb(230,230,230)',
    borderRadius: 10,
    marginTop: 14,
    textAlign: 'center',
    alignSelf: 'center',
  },
  crossContainer: {
    flex: 1,
    position: 'absolute',
    padding: 14,
  },
  cross: {
    height: 22,
    width: 22,
  },
  headerText: {
    margin: 12,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    backgroundColor: 'rgb(232,232,232)',
    margin: 8,
    borderRadius: 6,
    fontSize: 16,
    flexDirection: 'row',
  },
  visibility: {
    height: 16,
    width: 24,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgb(190,190,190)',
    fontSize: 15,
    paddingRight: 6,
  },
});

export default Register;
