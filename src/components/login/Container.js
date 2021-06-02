import React, {useState} from 'react';
import {
  Modal,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
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

      <View style={style.button}>
        {/* size : {'sm', 'md', 'lg'} */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Button text="Login" transparent={true} size="md" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TnC')}>
          <Button text="Register" transparent={false} size="md" />
        </TouchableOpacity>
      </View>
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
  button: {
    flex: 3,
    flexDirection: 'row',
    height: 40,
    marginBottom: 30,
    justifyContent: 'space-around',
  },
});

export default Container;
