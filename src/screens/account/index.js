import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Avatar, List, Checkbox } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import Text from '../../components/elements/text';
import { wp } from '../../components/responsive';
import MyStatusBar from '../../components/statusbarTab';

import * as authAct from '../../store/actions/auth';

function Account(props) {
  useFocusEffect(
    React.useCallback(() => {
      MyStatusBar('white', true);
    }, []),
  );

  const handleDevelopment = () => {
    alert('Sedang tahap Development');
  };

  const logOut = () => {
    props.dispatch(authAct.logOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header.... */}
      <View style={[styles.header, styles.jusCenter]}>
        <Text size={20} type="semibold">
          Informasi Akun
        </Text>
      </View>

      {/* profile photo */}
      <View style={[styles.profile, styles.alCenter]}>
        <Avatar.Text size={wp(14)} label="XD" />
        <View style={styles.profileNameWrapper}>
          <Text size={16} type="semibold" style={styles.lSpacing}>
            Ust. Yusril Izza Aulia
          </Text>
          <Text size={12} style={styles.lSpacing}>
            Staf BPS
          </Text>
        </View>
      </View>

      {/* content settings */}
      <View style={styles.content}>
        <List.Section title="Akun">
          <List.Item title="Ubah Profil" onPress={handleDevelopment} />
          <List.Item title="Log Out" onPress={logOut} />
        </List.Section>
        <List.Section title="Keamanan">
          <List.Item title="Ubah Pin" onPress={handleDevelopment} />
          <List.Item title="Ubah Password" onPress={handleDevelopment} />
        </List.Section>
        <List.Section title="Tentang">
          <List.Item title="Pusat Bantuan" onPress={handleDevelopment} />
        </List.Section>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  jusCenter: {
    justifyContent: 'center',
  },
  alCenter: {
    alignItems: 'center',
  },
  header: {
    flex: 0.8,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
  },
  lSpacing: {
    letterSpacing: 1,
  },
  profileNameWrapper: {
    marginLeft: wp(4),
  },
  content: {
    flex: 7,
  },
});

export default connect()(Account);
