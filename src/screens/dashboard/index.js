import React from 'react';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Text from '../../components/elements/text';
import MyStatusBar from '../../components/statusbarTab';
import styles from './styles';

// tabscreen
import ClassPages from './tabScreen/classPages';
import HostelPages from './tabScreen/hostelPages';

function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Kelas' },
    { key: 'second', title: 'Asrama' },
  ]);

  const initialLayout = { width: Dimensions.get('window').width };

  useFocusEffect(
    React.useCallback(() => {
      MyStatusBar('white', true);
    }, []),
  );

  const renderScene = SceneMap({
    first: ClassPages,
    second: HostelPages,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="green"
      inactiveColor="black"
      indicatorStyle={styles.tabIndicator}
      style={styles.tabBackColor}
      renderLabel={({ route, focused, color }) => (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text size={12} style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text size={18} type="semibold">
          Dashboard
        </Text>
      </View>
      <View style={styles.info}>
        <TotalInfo total={104} title="Siswa Tsanawiyah" />
        <TotalInfo total={98} title="Siswa Aliyah" />
      </View>
      <View style={styles.content}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </View>
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
