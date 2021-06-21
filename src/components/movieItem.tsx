import React, { FC } from 'react';
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import colors from 'src/assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 140,
    borderRadius: 8,
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    position: 'absolute',
    opacity: 0.2,
  },
  placeHolder: {
    position: 'absolute',
    margin: 10,
    backgroundColor: colors.grey30,
  },
  infoContainer: {
    flexDirection: 'row',
    height: '100%',
    padding: 10,
  },
  image: {
    width: 80,
    height: '100%',
    borderRadius: 6,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  date: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 8,
  },
});

export interface IMovieItem {
  style?: StyleProp<ViewStyle>;
  uri?: string;
  title?: string;
  date?: string;
}

const MovieItem: FC<IMovieItem> = props => {
  const { style = {}, uri, title, date } = props;

  const renderPlaceHolder = () => <View style={[styles.image, styles.placeHolder]} />;
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.background} source={{ uri }} />
      <View style={styles.infoContainer}>
        {renderPlaceHolder()}
        <Image style={styles.image} source={{ uri }} />
        <View style={{ paddingHorizontal: 6, flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieItem;
