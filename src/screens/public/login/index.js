import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Text from '../../../components/elements/text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import MySnackBar from '../../../components/mySnackBar';
import MyStatusBar from '../../../components/statusbar';

// actions
import * as authAct from '../../../store/actions/auth';

function Index(props) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [hide, setHide] = useState(true);
  const [authWarn, setAuthWarn] = useState(false);
  const { auth, dispatch } = props;

  const visiblePassword = () => {
    setHide(!hide);
  };

  const login = () => {
    if (form.password && form.email) {
      dispatch(authAct.login(form)).catch(() => {
        setAuthWarn(true);
      });
    } else {
      setAuthWarn(true);
    }
  };

  const toForgot = () => {
    props.navigation.navigate('Forgot');
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar color="white" dark />
      <View style={styles.titleWrapper}>
        <Text size={24} type="semibold">
          Madinatunnajah Guidance
        </Text>
        <Text size={24} type="semibold">
          Management
        </Text>
      </View>
      <View style={styles.loginWrapper}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              editable={!auth.isLoading}
              value={form.email}
              onChangeText={val => setForm({ ...form, email: val })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              editable={!auth.isLoading}
              secureTextEntry={hide}
              placeholder="Password"
              value={form.password}
              onChangeText={val => setForm({ ...form, password: val })}
            />
            <TouchableOpacity onPress={visiblePassword}>
              <Icon name={hide ? 'eye' : 'eye-slash'} size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotWrapper} onPress={toForgot}>
          <Text size={12} color="white">
            Lupa password !
          </Text>
        </TouchableOpacity>
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.signUpBtn}>
            <Text size={16} color="white">
              Daftar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} disabled={auth.isLoading} onPress={login}>
            {auth.isLoading ? (
              <ActivityIndicator color="black" />
            ) : (
              <Text size={16}> Masuk </Text>
            )}
            <Icon name="arrow-right" size={18} />
          </TouchableOpacity>
        </View>
      </View>
      <MySnackBar
        type="danger"
        visible={authWarn}
        onDismiss={() => setAuthWarn(false)}
        message={
          form.password && form.email
            ? 'Password atau email yang anda masukkan salah !'
            : 'Masukkan Password dan email terlebih dahulu !'
        }
      />
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Index);
