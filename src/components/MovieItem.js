import React from 'react';
import {Text, View, Image, Dimensions, Button, Alert} from 'react-native';

const SCREEN_SIZE = Dimensions.get('screen');

const MovieItem = ({movie}) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <View
      style={{
        margin: 15,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 10}}>
        {movie.movieName}
      </Text>
      <Image
        source={{uri: movie.poster}}
        style={{
          width: SCREEN_SIZE.width - 30 - 20,
          height: 150,
          marginBottom: 10,
        }}
      />
      <Text style={{fontSize: 20, marginBottom: 10}}>
        Release Date:{' '}
        {new Date(movie.releaseDate).toLocaleDateString('en-US', options)}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text>Genre: {movie.genre}</Text>
        <Text>Rating: {movie.rating}</Text>
      </View>
      <Button
        onPress={() => {
          Alert.alert(`'${movie.movieName}' has been booked successfully!`);
        }}
        title="Book"
      />
    </View>
  );
};

export default MovieItem;
