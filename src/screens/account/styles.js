import { StyleSheet } from 'react-native';
import { wp } from '../../components/responsive';
import colors from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  jusCenter: {
    justifyContent: 'center',
  },
  alCenter: {
    alignItems: 'center',
  },
  header: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  profile: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  lSpacing: {
    letterSpacing: 0.5,
  },
  profileNameWrapper: {
    marginLeft: wp(4),
  },
  content: {
    flex: 7,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  iconList: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(2),
  },
  grey: {
    color: colors.gray1,
  },
});

export default styles;
