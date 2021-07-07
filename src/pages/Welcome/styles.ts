import { StyleSheet , Dimensions} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
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
    height: Dimensions.get('window').width * 0.7
  }
});