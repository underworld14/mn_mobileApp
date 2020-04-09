import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../components/responsive';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  listData: {
    height: hp(10),
    marginTop: hp(2),
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    elevation: 3,
  },
  alCenter: {
    alignItems: 'center',
  },
  assistantL: {
    fontFamily: 'Assistant-Light',
  },
  txtGray: {
    color: '#808080',
  },
  txtPrimary: {
    color: color.primary,
  },
  superVisorWrapper: {
    width: wp(55),
  },
  lineSeparator: {
    width: 1,
    backgroundColor: '#808080',
    height: '70%',
  },
});

export default styles;
