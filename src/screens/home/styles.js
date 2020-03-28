import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicBanner: {
    backgroundColor: '#26C281',
    height: hp(25),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: color.info,
  },
  infoBanner: {
    backgroundColor: 'white',
    height: hp(15),
    width: wp(90),
    elevation: 4,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: -90,
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoTitleWrapper: {
    width: '90%',
  },
  profileWrapper: {
    width: wp(90),
    marginTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingWrapper: {
    marginLeft: 15,
  },
  infoTotalWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default styles;
