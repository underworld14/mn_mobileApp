import { StyleSheet } from 'react-native';
import { wp, hp } from '../../../components/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  content: {
    flex: 12,
  },
  avatarSection: {
    marginVertical: hp(4),
    alignItems: 'center',
  },
  updateSection: {},
  formInput: {
    height: hp(8),
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    marginTop: 2,
    paddingVertical: hp(1),
  },
  textInput: {
    fontFamily: 'Assistant-Semibold',
    fontSize: 16,
    lineHeight: 15,
  },
});

export default styles;
