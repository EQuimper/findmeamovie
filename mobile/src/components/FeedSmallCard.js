// @flow

import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '@appandflow/touchable';
import Color from 'color';

import FeedCardStarRating from './FeedCardStarRating';
import { colors } from '../utils/constants';

const { width: WIDTH } = Dimensions.get('window');

const fakeUrl =
  'https://pbs.twimg.com/profile_images/835144746217664515/oxBgzjRA_bigger.jpg';

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
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
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
        <View style={styles.wrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <View style={styles.categoriesWrapper}>
            {categories.map((cat, i) => (
              <Text
                style={[styles.category, { marginLeft: i > 0 ? 2 : 0 }]}
                key={i}
              >
                {cat} {i !== categories.length - 1 && '/'}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.metaWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatarImg} source={{ uri: fakeUrl }} />
          </View>
          <View style={styles.reviewMetaWrapper}>
            <Text numberOfLines={1} style={styles.userName}>
              EQuimper
            </Text>
            <FeedCardStarRating rating={4} avgRating={4.5} />
          </View>
        </View>
        <View style={styles.reviewWrapper}>
          <Text style={styles.review} numberOfLines={5}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
            ad nisi magni voluptatem
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 150,
    width: WIDTH,
    backgroundColor: '#fff',
    position: 'relative',
    flexDirection: 'row',
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
  avatarWrapper: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  reviewMetaWrapper: {
    flex: 0.75,
    justifyContent: 'center',
  },
  avatarImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imageWrapper: {
    flex: 0.6,
    position: 'relative',
  },
  contentWrapper: {
    flex: 0.4,
    padding: 5,
  },
  metaWrapper: {
    flex: 0.5,
    flexDirection: 'row',
  },
  reviewWrapper: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
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
    fontSize: 15,
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
    flex: 1,
    width: null,
    height: null,
  },
  userName: {
    fontSize: 14,
  },
  review: {
    color: Color(colors.black).alpha(0.5),
    fontSize: 13,
  },
});
