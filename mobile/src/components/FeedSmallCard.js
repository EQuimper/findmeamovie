// @flow

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

type Props = {
  imageUrl: string,
  id: number,
  title: string,
  categories: Array<string>,
};

export default function FeedSmallCard({ imageUrl, title, categories }: Props) {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
      <View style={styles.wrapper}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <View style={styles.categoriesWrapper}>
          {categories.map((cat, i) => (
            <Text
              style={[styles.category, { marginLeft: i > 0 ? 5 : 0}]}
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
    padding: 10
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
    color: 'rgba(255, 255, 255, 0.8)'
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: null,
    height: null,
  },
});
