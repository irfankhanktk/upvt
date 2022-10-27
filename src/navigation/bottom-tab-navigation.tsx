import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import BottomMenu from '../components/atoms/bottom-menu';
import BottomMenuIcon from '../components/atoms/bottom-menu/bottom-icon';
import { mvs } from '../config/metrices';
import Discover from '../screens/discover';
import Home from '../screens/home';
import Profile from '../screens/profile';
import TabParamList from '../types/navigation-types/bottom-tab';

const BottomTab = createBottomTabNavigator<TabParamList>();

const Tab = () => {
  const {colors}=useTheme();
  return (
    <View style={{flex:1}}>
      <BottomTab.Navigator
        // options={{tabBarHideOnKeyboard:true}}
        screenOptions={{headerShown: false,tabBarHideOnKeyboard:true}}
        tabBar={props => <BottomMenu {...props} colors={colors}/>}
       >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            unmountOnBlur:false,
            title: 'Home',
            tabBarIcon: (focused) => <BottomMenuIcon name="home" focused={focused}/>,
          }}
        />
           <BottomTab.Screen
          name="Discover"
          component={Discover}
          options={{
            unmountOnBlur:false,
            title: 'Discover',
            tabBarIcon: (focused) => <BottomMenuIcon name="discover" focused={focused}/>,
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            unmountOnBlur:false,
            title: 'Profile',
            tabBarIcon: (focused) => <BottomMenuIcon name="profile" focused={focused}/>,
          }}
        />
     
      </BottomTab.Navigator>
      </View>
  );
};

export default Tab;