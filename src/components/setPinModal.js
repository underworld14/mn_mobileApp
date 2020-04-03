import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import { Modal, Button } from 'react-native-paper';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import Text from './elements/text';
import { wp, hp } from './responsive';
import { image } from '../assets';

function SetPinModal({ visible, onClose, onSubmit }) {
  const [pin, setPin] = React.useState('');
  const [disable, setDisable] = React.useState(true);

  const submitPin = async () => {
    await onSubmit(pin);
    setPin('');
  };

  return (
    <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
      <View style={styles.greetingContainer}>
        <Image source={image.welcome} style={styles.image} />
        <View style={styles.textWrapper}>
          <Text size={14} type="semibold">
            Selamat Datang, Ustadz !
          </Text>
          <Text size={10} align="center">
            Untuk mulai menggunakan aplikasi silahkan daftarkan pin unik anda untuk segera
            memulai aktifitas.
          </Text>
        </View>
      </View>

      <View style={styles.pinCodeWrapper}>
        <SmoothPinCodeInput
          password
          cellStyle={styles.pinCell}
          cellStyleFocused={styles.pinCellFocused}
          codeLength={6}
          value={pin}
          onTextChange={pass => setPin(pass)}
          onFulfill={() => setDisable(false)}
        />
      </View>

      <Button
        dark
        mode="contained"
        style={styles.button}
        disabled={disable}
        onPress={submitPin}>
        <Text> Simpan PIN</Text>
      </Button>
    </Modal>
  );
}

SetPinModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

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
  image: {
    width: wp(50),
    height: wp(50),
    marginTop: wp(-10),
    marginBottom: wp(-8),
  },
  greetingContainer: {
    alignItems: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    textAlign: 'center',
  },
  pinCodeWrapper: {
    marginTop: wp(8),
    marginBottom: wp(8),
  },
  button: {
    width: '100%',
    borderRadius: 10,
  },
  pinCell: {
    backgroundColor: '#E9E8E8',
    borderRadius: 10,
  },
  pinCellFocused: {
    backgroundColor: '#26C281',
  },
});

export default SetPinModal;
