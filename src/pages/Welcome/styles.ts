import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.heading,
    marginTop: 38
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: theme.colors.heading
    },
  button: {
    justifyContent: 'center',
    marginBottom: 10
  },
  image: {
    height: 292,
    width: 284,
  }
});