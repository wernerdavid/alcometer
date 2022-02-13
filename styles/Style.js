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
      marginBottom: 16,
      marginTop: 16,
  },
  headline2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
      alignSelf: 'stretch',
  },
  textInput: {
      backgroundColor: '#f2f2f2',
      marginBottom: 20,
  },
  dropDown: {
    marginBottom: 1000,
  },
})