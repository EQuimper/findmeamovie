// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FeedCard() {
  return (
    <View style={styles.root} />
  )
}

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    height: 412,
    width: 335,
    backgroundColor: 'rgba(216, 216, 216, 45)',
    alignSelf: 'center',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 16
    }
  }
})