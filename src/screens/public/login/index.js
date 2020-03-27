import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Index({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}> Madinatunnajah Guidance </Text>
        <Text style={styles.title}> Management </Text>
      </View>
      <View style={styles.loginWrapper}>
        <View style={styles.inputWrapper}>
          <TextInput style={{ ...styles.input, marginBottom: 20 }} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgot}> Lupa password ! </Text>
        </TouchableOpacity>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpTxt}> Daftar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginTxt}> Masuk </Text>
            <Icon name="arrow-right" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
  },
  loginWrapper: {
    flex: 1.2,
    backgroundColor: '#26C281',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '85%',
    marginBottom: 20,
  },
  input: {
    height: 62,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 18,
    borderRadius: 15,
    elevation: 3,
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
  loginTxt: {
    fontWeight: '400',
    fontSize: 18,
  },
  forgotWrapper: { width: '85%', marginBottom: 25 },
  forgot: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
  },
  signUpTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
});

export default Index;
