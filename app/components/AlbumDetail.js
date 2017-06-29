import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContent, thumbnail, thumbnailContainer, headerText, imageStyle } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnail}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardItem>
    </Card>
  );
}

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18,

  },
  thumbnail: {
    width: 50,
    height: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
}

export default AlbumDetail;
