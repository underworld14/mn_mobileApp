import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Text from '../../components/elements/text';
import MyStatusBar from '../../components/statusbarTab';
import styles from './styles';

function HomeScreen(props) {
  useFocusEffect(
    React.useCallback(() => {
      MyStatusBar('white', true);
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <MyStatusBar color="white" dark /> */}
        <Text size={18} type="semibold">
          Dashboard
        </Text>
      </View>
      <View style={styles.info}>
        <TotalInfo total={104} title="Siswa Tsanawiyah" />
        <TotalInfo total={98} title="Siswa Aliyah" />
      </View>
      <View style={styles.content} />
    </SafeAreaView>
  );
}

function TotalInfo({ total, title }) {
  return (
    <View style={styles.infoTotal}>
      <Text size={20} type="semibold" color="white">
        {total}
      </Text>
      <Text size={12} color="white" style={styles.infoSubTxt}>
        {title}
      </Text>
    </View>
  );
}

export default HomeScreen;
