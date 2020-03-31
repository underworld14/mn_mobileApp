import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Text, { textSize } from '../../../components/elements/text';
import Icon from 'react-native-vector-icons/FontAwesome5';

// actions
import * as authAct from '../../../store/actions/auth';

function Index({ navigation }) {
  const [hide, setHide] = useState(true);
  const [disabled, setDisable] = useState(false);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();

  const visiblePassword = () => {
    setHide(!hide);
  };

  const login = () => {
    setDisable(true);
    setTimeout(() => {
      dispatch(authAct.login(email));
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text size={26} type="semibold">
          Madinatunnajah Guidance
        </Text>
        <Text size={26} type="semibold">
          Management
        </Text>
      </View>
      <View style={styles.loginWrapper}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} secureTextEntry={hide} placeholder="Password" />
            <TouchableOpacity onPress={visiblePassword}>
              <Icon name={hide ? 'eye' : 'eye-slash'} size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotWrapper}>
          <Text size={12} color="white">
            Lupa password !
          </Text>
        </TouchableOpacity>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text size={18} color="white">
              Daftar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} disabled={disabled} onPress={login}>
            {disabled ? <ActivityIndicator color="black" /> : <Text size={18}> Masuk </Text>}
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
    fontSize: textSize(12),
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

export default Index;
