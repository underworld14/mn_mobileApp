import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Index({ navigation }) {
  const [hide, setHide] = useState(true);
  const [eye, setEye] = useState('eye');
  const [disabled, setDisable] = useState(false);

  const visiblePassword = () => {
    setHide(!hide);
    setEye(eye === 'eye' ? 'eye-slash' : 'eye');
  };

  const login = () => {
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
    }, 3000);
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}> Madinatunnajah Guidance </Text>
        <Text style={styles.title}> Management </Text>
      </View>
      <View style={styles.loginWrapper}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} secureTextEntry={hide} placeholder="Password" />
            <TouchableOpacity onPress={visiblePassword}>
              <Icon name={eye} size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgot}> Lupa password ! </Text>
        </TouchableOpacity>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpTxt}> Daftar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} disabled={disabled} onPress={login}>
            {disabled ? (
              <ActivityIndicator color="black" />
            ) : (
              <Text style={styles.loginTxt}> Masuk </Text>
            )}
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
    fontSize: 16,
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
  loginTxt: {
    fontWeight: '400',
    fontSize: 18,
  },
  forgotWrapper: {
    width: '85%',
    marginBottom: 25,
  },
  forgot: {
    color: 'white',
    fontSize: 14,
  },
  signUpTxt: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
});

export default Index;
