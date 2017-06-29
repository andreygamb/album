import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

const App = () => {
  return (
    <View style={styles.container}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
}

AppRegistry.registerComponent('udemy', () => App);
