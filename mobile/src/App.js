// @flow

import React, { Component } from 'react';
import SideMenu from 'react-native-side-menu';
import { Dimensions } from 'react-native';

import { AppNavigator } from './navigations';
import Menu from './components/Menu';

const { width: WIDTH } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <SideMenu menu={<Menu />} openMenuOffset={WIDTH - 40}>
        <AppNavigator />
      </SideMenu>
    );
  }
}
