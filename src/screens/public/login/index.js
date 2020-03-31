import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, TouchableOpacity, TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Text from '../../../components/elements/text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

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

export default Index;
