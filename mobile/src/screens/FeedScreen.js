// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import FeedCard from '../components/FeedCard';
import FeedSmallCard from '../components/FeedSmallCard';

const data = [
  {
    title: 'Wonder Woman',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    categories: ['Action', 'Adventure'],
    action: 'Currently Watching',
    watchLater: true,
    id: 1,
  },
  {
    title: 'Annabelle: Creation',
    action: 'Want to watch later',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    categories: ['Horror'],
    watchLater: false,
    id: 2,
  },
  {
    title: 'Spider-Man: Homecoming',
    action: 'Just finished',
    categories: ['Action', 'Adventure'],
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX128_CR0,0,128,190_AL_.jpg',
    watchLater: true,
    id: 3,
  },
];

class FeedScreen extends Component {
  state = {};

  _renderItem = ({ item }: { item: Object }) => <FeedCard {...item} />;

  _renderHorizontalItem = ({ item }) => <FeedSmallCard {...item} />;

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                style={styles.recommandationsList}
                horizontal
                renderItem={this._renderHorizontalItem}
              />
            </View>
          )}
          keyExtractor={({ id }) => id}
          data={data}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 10,
  },
  recommandationsList: {
    height: 160,
    width: '100%',
  },
});

export default FeedScreen;
