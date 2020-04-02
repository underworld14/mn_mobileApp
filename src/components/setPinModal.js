import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Modal } from 'react-native-paper';

import Text from './elements/text';
import { wp, hp } from './responsive';
import { image } from '../assets';

function setPinModal({ visible, onClose }) {
  return (
    <>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={styles.modalContainer}>
        <Image source={image.welcome} style={{ width: 250, height: 250 }} />
        <Text size={14} type="semibold">
          Selamat Datang, Ustadz !
        </Text>
        <Text size={10} style={{ textAlign: 'center' }}>
          Untuk mulai menggunakan aplikasi silahkan daftarkan pin unik anda untuk segera
          memulai aktifitas.
        </Text>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: wp(90),
    height: hp(50),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: '10%',
  },
});

export default setPinModal;
