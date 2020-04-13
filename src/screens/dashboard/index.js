import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Text from '../../components/elements/text';
import MyStatusBar from '../../components/statusbarTab';
import styles from './styles';
import ErrorBottomSheet from '../../components/errorBottomSheet';

// actions
import * as hostelAct from '../../store/actions/hostels';
import * as classroomAct from '../../store/actions/classroom';

// tabscreen
import ClassPages from './tabScreen/classPages';
import HostelPages from './tabScreen/hostelPages';

function Dashboard(props) {
  const [index, setIndex] = React.useState(0);
  const errSheet = React.useRef();

  useEffect(() => {
    initialLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      MyStatusBar('white', true);
    }, []),
  );

  const routes = [{ key: 'first', title: 'Kelas' }, { key: 'second', title: 'Asrama' }];
  const initialLayout = { width: Dimensions.get('window').width };
  const renderScene = SceneMap({
    first: ClassPages,
    second: HostelPages,
  });

  const initialLoadPage = async () => {
    await Promise.all([
      props.dispatch(classroomAct.get()),
      props.dispatch(hostelAct.get()),
    ]).catch(() => errSheet.current.open());
  };

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
      <ErrorBottomSheet refSheet={errSheet} onClose={initialLoadPage} />
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

export default connect()(Dashboard);
