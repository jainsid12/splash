import React from 'react';
import Challenges from './Challenges';
import Trips from './Trips';
import KnowledgeBites from './KnowledgeBites';
import Home from './Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    labeled={false}
    tabBarOptions={{showLabel: false}}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Challenges':
            iconName = 'trophy';
            break;
          case 'Trips':
            iconName = 'car';
            break;
          case 'KnowledgeBites':
            iconName = 'library';
            break;
        }
        return (
          <MaterialCommunityIcons
            name={iconName}
            size={focused ? 28 : 22}
            color={focused ? 'rgba(0,0,0,0.75)' : 'rgb(175,175,175)'}
            style={{justifyContent: 'center', marginBottom: focused ? 8 : null}}
          />
        );
      },
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Challenges" component={Challenges} />
    <Tab.Screen name="Trips" component={Trips} />
    <Tab.Screen name="KnowledgeBites" component={KnowledgeBites} />
  </Tab.Navigator>
);

export default BottomTab;
