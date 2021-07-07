import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 78
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    marginTop: 20
  },
  footer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20
  },
  subTitle: {
    fontSize: 17,
    lineHeight: 32,
    textAlign: 'center',
    color: theme.colors.heading,
    fontFamily: theme.fonts.text,
    marginTop: 10,
  }
});