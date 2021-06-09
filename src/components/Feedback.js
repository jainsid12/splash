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
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';

const Register = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <GestureRecognizer onSwipeDown={() => props.closeFeedback()}>
      <Modal
        visible={props.openFeedback}
        animationType="slide"
        onRequestClose={() => props.closeFeedback()}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(26,26,26,0.95)'}}>
          <View style={style.container}>
            {/* close  */}

            <View style={style.close}>
              <View style={{flex: 1}}>
                <Text style={style.slider}></Text>
              </View>
              <Pressable
                style={style.crossContainer}
                onPress={() => props.closeFeedback()}>
                <Image
                  source={require('../assets/cross.png')}
                  style={style.cross}
                />
              </Pressable>
            </View>

            {/* header */}
            <View style={{alignItems: 'center'}}>
              <Text style={style.headerText}>What can we improve?</Text>
            </View>

            {/* credentials input */}
            <TextInput
              placeholder="Type your comments here"
              style={[style.input, {padding: 16}]}
              placeholderTextColor="#AFAFAF"
              multiline={true}
            />

            {/*  */}
            <View style={{marginVertical: 22}}>
              <Button
                text="Submit feedback"
                size="lg"
                type="active"
                onPress={() => {
                  navigation.navigate('BottomTab'), props.closeFeedback();
                }}
              />
            </View>
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
    height: 130,
    textAlignVertical: 'top',
  },
});

export default Register;
