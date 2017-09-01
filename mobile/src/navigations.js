// @flow

import { StackNavigator } from 'react-navigation';

import FeedScreen from './screens/FeedScreen';

export const AppNavigator = StackNavigator({
  FeedScreen: {
    screen: FeedScreen,
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