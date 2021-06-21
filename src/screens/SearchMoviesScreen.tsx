import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, lang } from 'src/assets';
import Input from 'src/components/input';
import MovieItem from 'src/components/movieItem';
import { useFetch } from 'src/hooks/use-fetch';
import { IPaginationMovies, IMovie } from 'src/types/data';
import config from 'src/utils/config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueTMDB,
    paddingHorizontal: 8,
  },
});

const SearchMoviesScreen = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [movieList, setMovieList] = useState<IMovie[]>([]);
  const { doFetch, data } = useFetch<IPaginationMovies>(false, 24 * 60000);

  useEffect(() => {
    if (data.results && data.results.length > 0) {
      setMovieList([...movieList, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    setMovieList([]);
    if (searchText !== '') {
      fetchingSearch();
    }
  }, [searchText]);

  const fetchingSearch = async (page: number = 1) =>
    doFetch('get', '/search/movie', { params: { query: searchText, page } });

  const renderItem = ({ item }: { item: IMovie }) => (
    <MovieItem
      uri={`${config.imageUrl}${item.poster_path}`}
      title={item.title}
      date={item.release_date}
      style={{ marginBottom: 10 }}
    />
  );

  const onEndReached = () => {
    if (data.page < data.total_pages) fetchingSearch(data.page + 1);
  };

  const renderList = () => (
    <FlatList
      renderItem={renderItem}
      data={movieList}
      initialNumToRender={10}
      keyExtractor={(item, index) => item.id.toString() + index}
      onEndReached={onEndReached}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Input
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={{ marginVertical: 12 }}
        placeholder={lang.searchMovPlaceHolder}
      />
      {renderList()}
    </SafeAreaView>
  );
};

export default SearchMoviesScreen;
