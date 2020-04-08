import { StyleSheet } from 'react-native';
import { wp, hp } from '../../components/responsive';
import color from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  info: {
    flex: 1,
    backgroundColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    // justifyContent: 'center',
  },
  infoTotal: {
    marginRight: wp(5),
  },
  infoSubTxt: {
    fontFamily: 'Assistant-Light',
  },
  content: {
    flex: 8,
    backgroundColor: 'lightgrey',
  },
});

export default styles;
