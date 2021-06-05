import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '659212212521-iknojbqdcn8gtpsbad4ckt5u5kg1vs3a.apps.googleusercontent.com',
});

function GoogleAuth() {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // console.log(idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <View>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Signed in with Google!'))
            .catch(err => console.log(err))
        }
      />
    </View>
  );
}

export default GoogleAuth;
