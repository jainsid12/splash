import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import Button from '../Button';
import Login from './Login';

const Container = ({navigation}) => {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    // <Modal visible={props.open}>
    <View style={style.container}>
      <View style={{flex: 3}}>
        <Text style={style.text}>
          Welcome to the Safer Driver app. Ready to take your driving skills to
          the next level?
        </Text>
      </View>
      <View style={style.scrollContainer}>
        <ScrollView horizontal={true} pagingEnabled style={style.scroll}>
          <Image
            source={require('../../assets/onboarding_map.png')}
            style={style.image}
          />
          <Image
            source={require('../../assets/onboarding_map.png')}
            style={style.image}
          />
          <Image
            source={require('../../assets/onboarding_map.png')}
            style={style.image}
          />
        </ScrollView>
      </View>

      <View style={style.buttonContainer}>
        {/* size : {'sm', 'md', 'lg'} */}
        <View style={style.button}>
          <Button
            text="Login"
            size="md"
            // onPress={() => navigation.navigate('Login')}
            onPress={() => setOpenLogin(true)}
          />
        </View>
        <View style={style.button}>
          <Button
            text="Register"
            type="active"
            size="md"
            onPress={() => navigation.navigate('TnC')}
          />
        </View>
      </View>
      <Login openLogin={openLogin} closeLogin={() => setOpenLogin(false)} />
    </View>
    // </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    paddingBottom: 12,
    marginTop: 'auto',
  },
  scrollContainer: {
    flex: 6,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  scroll: {
    height: 350,
    width: '100%',
  },
  image: {
    height: '90%',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    marginTop: '25%',
  },
});

export default Container;
