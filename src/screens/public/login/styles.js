import { StyleSheet } from 'react-native';
import { fs } from '../../../components/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  loginWrapper: {
    flex: 1.2,
    backgroundColor: '#26C281',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '85%',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 15,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: fs(12),
    fontFamily: 'Poppins-Regular',
    borderRadius: 15,
  },
  icon: {
    paddingHorizontal: 20,
  },
  btnWrapper: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '40%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    elevation: 3,
  },
  signUpBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotWrapper: {
    width: '85%',
    marginBottom: 25,
  },
});

export default styles;
