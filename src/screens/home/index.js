import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Avatar, Portal } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import { wp } from '../../components/responsive';
import styles from './styles';
import Text from '../../components/elements/text';
import Total from './total';
import HomeMenu from '../../components/menu';
import Divider from '../../components/divider';
import SetPinModal from '../../components/setPinModal';

const newsEntries = [
  {
    title: 'Ramadhan telah tiba !',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQVrVKUa22DGrNuCYzMNa4w-x_GRkKaGiFaWXjOOfL-l9ZNRQx&usqp=CAU',
  },
  {
    title: 'Ramadhan telah tiba !',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQVrVKUa22DGrNuCYzMNa4w-x_GRkKaGiFaWXjOOfL-l9ZNRQx&usqp=CAU',
  },
  {
    title: 'Ramadhan telah tiba !',
    image: 'https://i.ytimg.com/vi/yTzEFNhEYLw/maxresdefault.jpg',
  },
];

function HomeScreen({ navigation }) {
  const [pinModal, setPinModal] = useState(false);

  const _onOpen = () => {
    setPinModal(true);
  };

  const _onDismiss = () => {
    setPinModal(false);
  };

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
            <HomeMenu name="student" goTo={_onOpen} />
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
            data={newsEntries}
            sliderWidth={wp(100)}
            itemWidth={styles.newsImage.width}
            containerCustomStyle={styles.slidesMargin}
            renderItem={renderCarousel}
          />
        </View>
      </ScrollView>

      {/* unvisible render */}
      <Portal>
        <SetPinModal visible={pinModal} onClose={_onDismiss} />
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

export default HomeScreen;
