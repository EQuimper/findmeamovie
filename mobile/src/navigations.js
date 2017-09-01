// @flow

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

import FeedScreen from './screens/FeedScreen';

const Tabs = TabNavigator({
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="local-movies" color={tintColor} size={30}  />
      )
    }
  },
  MovieSwipingScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View style={styles.cardButton}>
          <MaterialCommunityIcons name="cards" color={tintColor} size={30}  />
        </View>
      )
    }
  },
  SettingsScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-settings" color={tintColor} size={30}  />
      )
    }
  }
}, {
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: '#000',
    inactiveTintColor: 'red',
    style: {
      backgroundColor: '#fff',
      height: 45
    }
  }
})

export const AppNavigator = StackNavigator({
  FeedScreen: {
    screen: Tabs,
    navigationOptions: {
      headerTitle: 'Home',
    }
  }
}, {
  cardStyle: {
    backgroundColor: '#fff'
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff'
    }
  }
});

const styles = StyleSheet.create({
  cardButton: {
    height: 50,
    width: 50,
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: '#000',
    borderWidth: 3
  }
})