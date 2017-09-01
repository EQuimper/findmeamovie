// @flow

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '@appandflow/touchable';

type Props = {
  imageUrl: string,
  id: number,
  title: string,
  categories: Array<string>,
  watchLater: boolean,
};

export default function FeedSmallCard({
  imageUrl,
  title,
  categories,
  watchLater,
}: Props) {
  return (
    <View style={styles.root}>
      <Touchable
        hitSlop={{
          top: 10,
          bottom: 10,
          right: 10,
          left: 10,
        }}
        style={styles.buttonLater}
        feedback="opacity"
      >
        <Ionicons
          name={watchLater ? 'ios-clock' : 'ios-clock-outline'}
          size={30}
          color="rgba(255, 255, 255, 0.8)"
        />
      </Touchable>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.categoriesWrapper}>
          {categories.map((cat, i) => (
            <Text
              style={[styles.category, { marginLeft: i > 0 ? 5 : 0 }]}
              key={i}
            >
              {cat}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 180,
    width: 335,
    backgroundColor: '#9B9B9B',
    borderRadius: 5,
    marginLeft: 10,
    position: 'relative',
  },
  wrapper: {
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  categoriesWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  category: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  buttonLater: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: null,
    height: null,
  },
});
