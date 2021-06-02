import React from 'react';
import Splash from './components/Splash';
import BottomTab from './components/navigation/BottomTab';
import Login from './components/login/Login';
import TnC from './components/login/TnC';
import Register from './components/login/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Container from './components/login/Container';
import Profile from './components/Profile';
import KnowledgeBites_details1 from './components/navigation/knowledge-bite-details/KnowledgeBites_details1';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Container"
        component={Container}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TnC" component={TnC} options={{headerShown: false}} />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerTitleAlign: 'center', headerBackTitle: 'Home'}}
      />
      <Stack.Screen
        name="KnowledgeBites_details1"
        component={KnowledgeBites_details1}
        options={{
          headerTitleAlign: 'center',
          title: 'Knowledge Bites',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
