import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import styles from './styles';
import Text from '../../components/elements/text';
import Total from './total';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.basicBanner}>
        {/* profile wrapper */}
        <View style={styles.profileWrapper}>
          <Avatar.Text size={65} label="YS" style={styles.avatar} />
          <View style={styles.greetingWrapper}>
            <Text type="semibold" size={17} color="white">
              Assalamualaikum, Kaifa Khalukum ?
            </Text>
            <Text size={18} color="white">
              Akh. Yusril Izza Aulia
            </Text>
          </View>
        </View>
      </View>

      {/* start info banner */}
      <View style={styles.infoBanner}>
        <View style={styles.infoTitleWrapper}>
          <Text size={16} type="semibold">
            Rekap hari ini
          </Text>
        </View>
        <View style={styles.infoTotalWrapper}>
          <Total title="Siswa Aktif" total={298} color="green" />
          <Total title="Siswa Izin" total={17} color="yellow" />
          <Total title="Siswa Sakit" total={9} color="tomato" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
