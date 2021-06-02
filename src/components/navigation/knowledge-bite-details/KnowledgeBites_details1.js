import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const KnowledgeBites_details1 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <ScrollView style={{paddingHorizontal: 14, backgroundColor: 'white'}}>
          <Image
            source={require('../../../assets/knowledge-bit/knowledge_info6.jpg')}
            style={style.image}
          />
          <Text style={{fontSize: 26, fontWeight: 'bold', marginVertical: 14}}>
            Moving from knowledge to wisdom
          </Text>
          <Text style={style.text}>
            So, how long does it take to buid a new
            driving-without-phone-handling habit?
            {'\n'}
            {'\n'}
            According to research, after only 2 weeks of driving a new
            "safe-driving network" is being formed in the brain,but with weak
            connections.
            {'\n'}
            {'\n'}
            After a few more weeks of phone-free driving, the connections become
            stronger, and finally a new habit is formed!
          </Text>
          <View style={style.alert}>
            <Text style={{fontWeight: 'bold', fontSize: 18, paddingBottom: 6}}>
              So now what!
            </Text>
            <Text style={style.text}>
              Driving without using your phone turns into a habit the more you
              do it. every trip will be easier than the last one!
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '700',
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            Is this useful?
          </Text>
          <Text
            style={{
              color: 'rgb(194,194,194)',
              textAlign: 'center',
              paddingBottom: 12,
            }}>
            Share your experience so that we can help you better.
          </Text>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Yes, it's useful</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.button,
              {
                marginBottom: 34,
                backgroundColor: null,
                borderWidth: 2,
              },
            ]}>
            <Text style={[style.buttonText, {padding: 16}]}>
              I don't like it
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 18,
  },
  alert: {
    backgroundColor: 'rgb(248, 209, 71)',
    padding: 14,
    borderRadius: 12,
    marginVertical: 12,
  },
  button: {
    backgroundColor: 'rgb(248, 209, 71)',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 14,
  },
  buttonText: {
    textAlign: 'center',
    padding: 18,
    fontWeight: '700',
  },
});

export default KnowledgeBites_details1;
