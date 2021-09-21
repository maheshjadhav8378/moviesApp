import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import DUMMY_DATA from '../../MOCK_DATA.json';
import MovieItem from '../components/MovieItem';

const AllMoviesScreen = () => {
  useEffect(() => {
    DUMMY_DATA.sort((a, b) => {
      const date1 = new Date(a.releaseDate);
      const date2 = new Date(b.releaseDate);
      if (date1.getTime() < date2.getTime()) {
        return -1;
      }
      if (date1.getTime() > date2.getTime()) {
        return 1;
      }
      return 0;
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DUMMY_DATA}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <MovieItem movie={item} />;
        }}
      />
    </View>
  );
};

export default AllMoviesScreen;
