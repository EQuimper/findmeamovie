// @flow

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../utils/constants';

const STAR_SIZE = 10;

type Props = {
  rating: number,
  avgRating: number,
};

export default function FeedCardStarRating({ rating, avgRating }: Props) {
  return (
    <View style={styles.root}>
      <Ionicons
        name="ios-star"
        color={rating >= 1 ? colors.red : 'gray'}
        size={STAR_SIZE}
      />
      <Ionicons
        style={styles.star}
        name="ios-star"
        color={rating >= 2 ? colors.red : 'gray'}
        size={STAR_SIZE}
      />
      <Ionicons
        style={styles.star}
        name="ios-star"
        color={rating >= 3 ? colors.red : 'gray'}
        size={STAR_SIZE}
      />
      <Ionicons
        style={styles.star}
        name="ios-star"
        color={rating >= 4 ? colors.red : 'gray'}
        size={STAR_SIZE}
      />
      <Ionicons
        style={styles.star}
        name="ios-star"
        color={rating === 5 ? colors.red : 'gray'}
        size={STAR_SIZE}
      />
      <Text style={styles.avgRating}>{avgRating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    marginLeft: 2
  },
  avgRating: {
    color: colors.red,
    marginLeft: 5,
    fontSize: 14
  }
});
