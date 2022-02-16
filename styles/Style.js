import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  headline1: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  headline2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  output: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})