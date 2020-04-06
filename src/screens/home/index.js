import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Portal } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import { wp } from '../../components/responsive';
import styles from './styles';
import Text from '../../components/elements/text';
import MyStatusBar from '../../components/statusbar';
import Total from './total';
import HomeMenu from '../../components/menu';
import Divider from '../../components/divider';
import SetPinModal from '../../components/setPinModal';
import MySnackBar from '../../components/mySnackBar';
import { capitalizeWord, nameAlias } from '../../utils/string';

// actions...
import * as authAct from '../../store/actions/auth';
import * as newsAct from '../../store/actions/news';
import * as studentAct from '../../store/actions/student';

function HomeScreen(props) {
  const [pinModal, setPinModal] = useState(false);
  const [pinWarn, setPinWarn] = useState(false);
  const { auth, dispatch, summary } = props;

  useEffect(() => {
    initialLoadScreen();
    if (!auth.userPin) {
      setPinModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialLoadScreen = async () => {
    await Promise.all([dispatch(newsAct.get()), dispatch(studentAct.getSummary())]);
  };

  const registerUserPin = async pin => {
    await dispatch(authAct.setPinUser(pin));
    setPinModal(false);
  };

  const teacherName = capitalizeWord(auth.credentials.teacher.name);
  const nick = nameAlias(teacherName);

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      <View style={styles.basicBanner}>
        {/* profile wrapper */}
        <View style={styles.profileWrapper}>
          <Avatar.Text size={wp(15)} label={nick} style={styles.avatar} />
          <View style={styles.greetingWrapper}>
            <Text type="semibold" size={14} color="white">
              Assalamualaikum, Kaifa Khalukum ?
            </Text>
            <Text size={14} color="white">
              Akh. {teacherName}
            </Text>
          </View>
        </View>
      </View>

      {/* start info banner */}
      <View style={styles.infoBanner}>
        <View style={styles.titleWrapper}>
          <Text size={14} type="semibold">
            Rekap hari ini
          </Text>
        </View>
        <View style={styles.infoTotalWrapper}>
          <Total title="Siswa Aktif" total={summary.students} type="primary" />
          <Total title="Siswa Izin" total={summary.permissions} type="info" />
          <Total title="Siswa Sakit" total={summary.illnesses} type="warning" />
        </View>
      </View>

      {/* beginning scrolling view */}
      <ScrollView>
        {/* menu section */}
        <View style={[styles.menuContainer, styles.toCenter]}>
          <View style={styles.titleWrapper}>
            <Text size={14} type="semibold">
              Menu Aplikasi
            </Text>
          </View>
          <View style={styles.menuWrapper}>
            <HomeMenu name="student" />
            <HomeMenu name="permission" />
            <HomeMenu name="illness" />
            <HomeMenu name="violation" />
          </View>
        </View>

        {/* divider */}
        <Divider />

        {/* news carousel */}
        <View style={[styles.newsContainer, styles.toCenter]}>
          <View style={styles.titleWrapper}>
            <Text size={14} type="semibold">
              Berita & Pengumuman
            </Text>
          </View>
          <Carousel
            data={props.news.data}
            sliderWidth={wp(100)}
            itemWidth={styles.newsImage.width}
            containerCustomStyle={styles.slidesMargin}
            renderItem={renderCarousel}
          />
        </View>
      </ScrollView>

      <MySnackBar
        type="warning"
        visible={pinWarn}
        onDismiss={() => setPinWarn(false)}
        message="Tolong Masukkan Pin Baru anda terlebih dahulu !"
      />

      {/* unvisible render */}
      <Portal>
        <SetPinModal
          visible={pinModal}
          onClose={() => setPinWarn(true)}
          onSubmit={pin => registerUserPin(pin)}
        />
      </Portal>
    </SafeAreaView>
  );
}

function renderCarousel({ item, index }) {
  return (
    <TouchableOpacity key={index}>
      <Image source={{ uri: item.image }} style={styles.newsImage} />
      <Text size={13} style={styles.slidesMargin}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  news: state.news,
  summary: state.student.summary,
});

export default connect(mapStateToProps)(HomeScreen);
