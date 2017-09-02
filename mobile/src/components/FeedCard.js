// @flow

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

type Props = {
  imageUrl: string,
  rating: number,
  title: string,
  action: string,
};

const fakeUrl = 'https://pbs.twimg.com/profile_images/835144746217664515/oxBgzjRA_bigger.jpg'

export default function FeedCard({ imageUrl, title, action }: Props) {
  return (
    <View style={styles.root}>
      <View style={styles.topWrapper}>
        <Image source={{ uri: fakeUrl }} style={styles.avatar} />
        <Text style={styles.userName}>EQuimper</Text>
      </View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    marginTop: 20,
    paddingHorizontal: 10,
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  topWrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
    backgroundColor: 'transparent'
  },
  actionText: {
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'transparent',
    marginLeft: 10
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 5
  }
})