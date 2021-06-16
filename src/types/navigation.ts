import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { routeNames } from 'src/hooks/use-navigation';

export type MoviesStackParamType = {
  [routeNames.SearchMovies]: undefined;
};

export type MainStackParamType = {
  [routeNames.Main]: MoviesStackParamType;
};

type IDefaultScreenProps<
  // take from CompositeNavigationProp
  CurrentCompositeStack,
  // take from navigators block,
  CurrentStack extends Record<string, object | undefined>,
  // current screen
  route extends string
> = {
  navigation: CurrentCompositeStack;
  route: RouteProp<CurrentStack, route>;
};

type rootStackCompositeType = CompositeNavigationProp<
  StackNavigationProp<MainStackParamType>,
  StackNavigationProp<MoviesStackParamType>
>;
export type RootStackScreenType<route extends string> = IDefaultScreenProps<
  rootStackCompositeType,
  MainStackParamType,
  route
>;
