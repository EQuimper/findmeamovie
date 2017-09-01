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
      <Image style={[styles.image, { borderRadius: 14 }]} source={{ uri: imageUrl }} />
      <View style={styles.wrapper}>
        <View style={styles.topWrapper}>
          <View style={styles.avatar}>
            <Image style={[styles.image, { borderRadius: 25 }]} source={{ uri: fakeUrl }} />
          </View>
          <Text style={styles.actionText}>{action}</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
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
    flex: 0.2,
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
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  }
})