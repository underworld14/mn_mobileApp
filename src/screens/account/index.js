import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, Image } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';

import styles from './styles';
import { wp } from '../../components/responsive';
import Text from '../../components/elements/text';
import MyStatusBar from '../../components/statusbarTab';
import Divider from '../../components/divider';
import { accountIcon } from '../../assets';

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

  const initialLoadPage = async () => {
    await props.dispatch(authAct.getMe());
  };

  const logOut = () => {
    props.dispatch(authAct.logOut());
  };

  const credentials = props.auth.credentials;
  const role =
    credentials.role === 'admin'
      ? 'Staf Pengasuhan'
      : credentials.role === 'supervisor'
      ? 'Pembimbing BPS'
      : 'SuperAdmin';

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
        {credentials.teacher.photo ? (
          <Avatar.Image size={wp(12)} source={{ uri: credentials.teacher.photo }} />
        ) : (
          <Avatar.Text size={wp(12)} label="XD" />
        )}
        <View style={styles.profileNameWrapper}>
          <Text size={17} type="semibold" style={[styles.grey]}>
            {`Ust. ${credentials.teacher.name}`}
          </Text>
          <Text size={10} style={[styles.grey]}>
            {credentials.email}
          </Text>
          <Text size={10} style={[styles.grey]}>
            {role}
          </Text>
        </View>
      </View>

      <Divider />

      {/* content settings */}
      <View style={styles.content}>
        <List.Section title="Akun">
          <ListItem
            title="Ubah Profile"
            iconSource={accountIcon.personIcon}
            onPress={() => props.navigation.navigate('Update-Profile')}
          />
          <ListItem title="Log Out" iconSource={accountIcon.logoutIcon} onPress={logOut} />
        </List.Section>
        <List.Section title="Keamanan">
          <ListItem
            title="Ubah Pin"
            iconSource={accountIcon.keyIcon}
            onPress={initialLoadPage}
          />
          <ListItem
            title="Ubah Password"
            iconSource={accountIcon.lockIcon}
            onPress={handleDevelopment}
          />
        </List.Section>
        <List.Section title="Tentang">
          <ListItem
            title="Pusat Bantuan"
            iconSource={accountIcon.helpIcon}
            onPress={handleDevelopment}
          />
        </List.Section>
      </View>
    </SafeAreaView>
  );
}

function ListItem({ title, iconSource, onPress }) {
  return (
    <List.Item
      title={title}
      onPress={onPress}
      left={() => <Image source={iconSource} style={styles.iconList} />}
      // eslint-disable-next-line react-native/no-inline-styles
      right={() => <Icon name="arrow-right" size={20} style={{ marginVertical: 8 }} />}
    />
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Account);
