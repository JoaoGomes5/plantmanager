import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subTitle: {
    fontSize: 17,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text,
    lineHeight: 20,
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  }
});