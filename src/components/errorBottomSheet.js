/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';

import { wp, hp } from './responsive';
import Text from './elements/text';
import { image } from '../assets';

export default function ErrorBottomSheet({ refSheet, onClose }) {
  return (
    <>
      <RBSheet
        ref={refSheet}
        onClose={onClose}
        customStyles={{
          container: {
            height: hp(40),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 20,
          },
        }}>
        <View style={{ flex: 1 }}>
          <Image
            source={image.maintenance}
            style={{ width: wp(40), height: wp(35), alignSelf: 'center' }}
          />
          <View style={{ marginVertical: hp(3) }}>
            <Text size={16} type="semibold">
              Sepertinya ada kesalahan !
            </Text>
            <Text size={11} type="thin">
              Pastikan jaringan dan koneksi internet anda, dan cobalah lain kali !
            </Text>
          </View>
          <Button dark mode="contained" onPress={onClose} style={{ borderRadius: 15 }}>
            <Text size={12}>Coba Lagi</Text>
          </Button>
        </View>
      </RBSheet>
    </>
  );
}
