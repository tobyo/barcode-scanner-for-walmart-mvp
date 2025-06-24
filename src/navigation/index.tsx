import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  WatchList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default Stack;
