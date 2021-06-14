import React, {useEffect, useState} from 'react';
import Splash from './components/Splash';
import BottomTab from './components/navigation/BottomTab';
import Login from './components/login/Login';
import TnC from './components/login/TnC';
import Register from './components/login/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Container from './components/login/Container';
import Profile from './components/Profile';
import Highlights from './components/Highlights';
import KnowledgeBites_details1 from './components/navigation/knowledge-bite-details/KnowledgeBites_details1';

const Stack = createStackNavigator();

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 4000);
  });

  return splash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Container"
          component={Container}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TnC"
          component={TnC}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Highlights"
          component={Highlights}
          options={{
            headerTitleAlign: 'center',
            headerBackTitle: 'Home',
            title: 'Week',
          }}
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
            headerBackTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
