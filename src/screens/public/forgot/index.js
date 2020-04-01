import React from 'react';
import { SafeAreaView, View, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';
import Text from '../../../components/elements/text';

import BackHeader from '../../../components/backHeader';
import { image } from '../../../assets';

function index({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackHeader action={() => navigation.goBack()} />
        </View>
        <View style={styles.body}>
          <View style={styles.contentWrapper}>
            <Image source={image.forgot} style={styles.image} />

            <View style={[styles.toCenter, styles.textContainer]}>
              <Text size={22} type="semibold">
                Lupa password anda ?
              </Text>
              <Text size={12}> Masukkan email anda yang terdaftar</Text>
              <Text size={12}> dan kami akan mengirimkan email konfirmasi</Text>
              <Text size={12}> untuk mereset password anda</Text>
            </View>
          </View>

          <View style={styles.emailWrapper}>
            <TextInput mode="outlined" label="email" />
          </View>

          <View style={styles.buttonWrapper}>
            <Button loading={false} onPress={() => alert('sudah coy')}>
              Kirim Permintaan
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default index;
