import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import DUMMY_DATA from '../../MOCK_DATA.json';
import MovieItem from '../components/MovieItem';

const LatestMoviesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    DUMMY_DATA.sort((a, b) => {
      const date1 = new Date(a.releaseDate);
      const date2 = new Date(b.releaseDate);
      if (date1.getTime() > date2.getTime()) {
        return -1;
      }
      if (date1.getTime() < date2.getTime()) {
        return 1;
      }
      return 0;
    });
    setMovies(
      DUMMY_DATA.filter(movie => {
        const date1 = new Date(movie.releaseDate);
        return date1.getTime() < new Date().getTime();
      }),
    );
  }, []);
  if (movies.length === 0) {
    return <ActivityIndicator size={50} />;
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <MovieItem movie={item} />;
        }}
      />
    </View>
  );
};

export default LatestMoviesScreen;
