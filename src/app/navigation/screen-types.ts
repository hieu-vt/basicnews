import { NewDetailRoutetype } from '@features/un-authentication/news-detail/type';
import { RegisterNavigationParams } from '@model/navigation-params';
import { StackScreenProps as RNStackScreenProps } from '@react-navigation/stack';

export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  BasicNews = 'BasicNews',
  NewDetail = 'NewDetail',
  REGISTER = 'REGISTER',

  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
}

export type RootStackParamList = {
  [APP_SCREEN.BasicNews]: undefined;
  [APP_SCREEN.REGISTER]: RegisterNavigationParams;
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.NewDetail]: NewDetailRoutetype;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  RNStackScreenProps<RootStackParamList, T>;
