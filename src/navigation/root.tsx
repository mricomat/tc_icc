import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';

import { routeNames } from 'src/hooks/use-navigation';
import SearchMoviesScreen from 'src/screens/SearchMoviesScreen';
import { MoviesStackParamType } from 'src/types/navigation';
import AnimationUtils from 'src/utils/animations';

enableScreens();

const RootStack = createStackNavigator<MoviesStackParamType>();

const Root = () => (
    <RootStack.Navigator screenOptions={AnimationUtils.stackOptions}>
      <RootStack.Screen name={routeNames.SearchMovies} component={SearchMoviesScreen} />
    </RootStack.Navigator>
  );

export default Root;
