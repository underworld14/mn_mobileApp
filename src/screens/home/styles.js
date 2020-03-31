import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../../theme/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: color.info,
  },
  infoBanner: {
    backgroundColor: 'white',
    height: hp(14),
    width: wp(90),
    elevation: 4,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: hp(-10),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  titleWrapper: {
    width: '90%',
  },
  profileWrapper: {
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
  },
  greetingWrapper: {
    marginLeft: wp(3),
  },
  infoTotalWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(0.5),
    paddingHorizontal: 20,
  },
  menuContainer: {
    width: wp(90),
    marginTop: 20,
    alignSelf: 'center',
  },
  menuWrapper: {
    marginTop: hp(2),
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'space-between',
  },
  newsContainer: {
    width: wp(100),
    alignSelf: 'center',
  },
  newsImage: {
    width: wp(75),
    height: hp(25),
    borderRadius: 15,
  },
  slidesMargin: {
    marginTop: hp(2),
  },
});

export default styles;
