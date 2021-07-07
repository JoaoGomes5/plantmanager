import { StyleSheet , Dimensions} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.colors.heading,
    marginTop: 38,
    fontFamily: theme.fonts.heading,
    lineHeight: 34
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
    },
  button: {
    justifyContent: 'center',
    marginBottom: 10
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
});