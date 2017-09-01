// @flow

import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import FeedCard from '../components/FeedCard';
import FeedSmallCard from '../components/FeedSmallCard';

const data = [
  {
    title: 'Wonder Woman',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    categories: ['Action', 'Adventure'],
    id: 1,
  },
  {
    title: 'Annabelle: Creation',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MzIwMjMxNF5BMl5BanBnXkFtZTgwMDQ3NTc2MjI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    categories: ['Horror'],
    id: 2,
  },
  {
    title: 'Spider-Man: Homecoming',
    categories: ['Action', 'Adventure'],
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX128_CR0,0,128,190_AL_.jpg',
    id: 3,
  },
];

class FeedScreen extends Component {
  state = {};

  _renderItem = ({ item, index }: { item: Object, index: number }) => {
    if (index === 0) {
      return <Text style={styles.subtitle}>Feeds</Text>;
    }

    return <FeedCard {...item} />;
  };

  _renderHorizontalItem = ({ item }) => <FeedSmallCard {...item} />;

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.subtitle}>Recommandations</Text>
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
    marginTop: 10,
    flex: 1,
  },
  subtitle: {
    fontSize: 22,
    marginLeft: 10,
  },
  recommandationsList: {
    height: 200,
    marginTop: 10,
  },
});

export default FeedScreen;
