// @flow

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { View, StyleSheet } from 'react-native';

import FeedScreen from './screens/FeedScreen';
import { colors } from './utils/constants';

const Tabs = TabNavigator({
  FeedScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="local-movies" color={tintColor} size={30}  />
      )
    }
  },
  InCinema: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialCommunityIcons name="run-fast" color={tintColor} size={30}  />
      )
    }
  },
  MovieSwipingScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <View style={styles.cardButton}>
          <MaterialCommunityIcons name="cards" color="#fff" size={30}  />
        </View>
      )
    }
  },
  ToWatchScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="tv" color={tintColor} size={30}  />
      )
    }
  },
  ProfileScreen: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <EvilIcons name="user" color={tintColor} size={40}  />
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
    activeTintColor: colors.red,
    inactiveTintColor: '#A29B9C',
    style: {
      backgroundColor: '#fff',
      height: 50
    }
  }
})

export const AppNavigator = StackNavigator({
  FeedScreen: {
    screen: Tabs,
    navigationOptions: {
      headerTitle: 'FindMeAMovie',
    }
  }
}, {
  cardStyle: {
    // backgroundColor: '#fff'
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
    backgroundColor: colors.red,
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: colors.red,
    borderWidth: 3,
    shadowOffset: {
      width: 1,
      height: 0
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: '#000'
  }
})