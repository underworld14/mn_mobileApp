import { StyleSheet } from 'react-native';
import { wp } from '../../../components/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: wp(-15),
  },
  image: {
    width: wp(80),
    height: wp(80),
  },
  textContainer: {
    marginTop: wp(-18),
  },
  emailWrapper: {
    width: '80%',
    marginTop: wp(12),
  },
  buttonWrapper: {
    width: '80%',
    marginTop: wp(15),
  },
});

export default styles;
