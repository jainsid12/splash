import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../Button';
import GoogleAuth from './GoogleAuth';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(26,26,26,0.95)'}}>
      <View style={style.container}>
        {/* close  */}

        <View style={style.close}>
          <View style={{flex: 1}}>
            <Text style={style.slider}></Text>
          </View>
          <Pressable
            style={style.crossContainer}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/cross.png')}
              style={style.cross}
            />
          </Pressable>
        </View>

        {/* header */}
        <View style={{alignItems: 'center'}}>
          <Text style={style.headerText}>Login</Text>
          <Image
            source={require('../../assets/smile.png')}
            style={{marginVertical: 10}}
          />
          <Text style={style.headerText}>Welcome Back!</Text>
        </View>

        {/* credentials input */}

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
        <Text style={style.forgot}>Forget Password?</Text>
        <TouchableOpacity
          style={{marginVertical: 8}}
          onPress={() => navigation.navigate('BottomTab')}>
          <Button text="Login" transparent={true} size="lg" />
        </TouchableOpacity>
        {/* google auth */}
        <GoogleAuth />
        {/* footer */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={style.footerText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Button text="Get Started" transparent={true} size="sm" />
          </TouchableOpacity>
        </View>
        {/*  */}
      </View>
    </SafeAreaView>
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
  forgot: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'flex-end',
    margin: 12,
  },
  footerText: {
    color: 'rgb(190,190,190)',
    marginBottom: 20,
    // height: '100%',
    textAlignVertical: 'center',
    fontSize: 15,
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default Login;
