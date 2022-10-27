// In App.js in a new project
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {horizontalAnimation} from '../utils';
import Splash from '../screens/splash';
import RootStackParamList from '../types/navigation-types/root-stack';
import Home from '../screens/home';
import AddTask from '../screens/add-task';
import Login from '../screens/login';
import SignupPersonal from '../screens/signup-personal-info';
import SignupPreferences from '../screens/signup-preferences';
import SignupInterest from '../screens/signup-interest';
import AddTrips from '../screens/add-trips';
import Tab from './bottom-tab-navigation';
import SavedTrips from '../screens/saved-trips';
import UpvotedTrips from '../screens/upvoted-trips';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={'#ffffff'}
        barStyle={Platform?.OS === 'ios' ? 'default' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupPersonal" component={SignupPersonal} />
        <Stack.Screen name="SignupPreferences" component={SignupPreferences} />
        <Stack.Screen name="SignupInterest" component={SignupInterest} />
        <Stack.Screen name="Tab" component={Tab} />
        {/* <Stack.Screen name="AddTask" component={AddTask} /> */}
        <Stack.Screen name="AddTrips" component={AddTrips} />
        <Stack.Screen name="SavedTrips" component={SavedTrips} />
        <Stack.Screen name="UpvotedTrips" component={UpvotedTrips} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,},
});
