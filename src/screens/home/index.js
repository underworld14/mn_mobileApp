import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Portal, Snackbar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import { wp } from '../../components/responsive';
import styles from './styles';
import Text from '../../components/elements/text';
import Total from './total';
import HomeMenu from '../../components/menu';
import Divider from '../../components/divider';
import SetPinModal from '../../components/setPinModal';

// actions...
import * as authAct from '../../store/actions/auth';

function HomeScreen(props) {
  const [pinModal, setPinModal] = useState(false);
  const [pinWarn, setPinWarn] = useState(false);

  useEffect(() => {
    if (!props.auth.pin) {
      setPinModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerUserPin = async pin => {
    await props.dispatch(authAct.setPinUser(pin));
    setPinModal(false);
  };

  console.log(props.news);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.basicBanner}>
        {/* profile wrapper */}
        <View style={styles.profileWrapper}>
          <Avatar.Text size={wp(15)} label="YS" style={styles.avatar} />
          <View style={styles.greetingWrapper}>
            <Text type="semibold" size={14} color="white">
              Assalamualaikum, Kaifa Khalukum ?
            </Text>
            <Text size={14} color="white">
              Akh. Yusril Izza Aulia
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
          <Total title="Siswa Aktif" total={298} color="green" />
          <Total title="Siswa Izin" total={17} color="yellow" />
          <Total title="Siswa Sakit" total={9} color="tomato" />
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
            <HomeMenu name="student" r />
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

      <Snackbar
        style={styles.snackBar}
        visible={pinWarn}
        duration={3000}
        onDismiss={() => setPinWarn(false)}>
        Tolong Masukkan Pin Baru anda terlebih dahulu !
      </Snackbar>

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
});

export default connect(mapStateToProps)(HomeScreen);
