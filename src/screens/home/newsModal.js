import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Modal } from 'react-native-paper';

import Text from '../../components/elements/text';
import { wp, hp } from '../../components/responsive';
import { timeIDShow } from '../../utils/day';

function NewsModal({ visible, onClose, data }) {
  const content = data.filter(val => val.id === visible)[0];

  if (!content) {
    return null;
  }

  return (
    <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modalContainer}>
      <ScrollView style={styles.scrolCon}>
        <View>
          <Text size={16} type="semibold">
            {content.title}
          </Text>
          <Text size={10}>oleh {content.user.teacher.name}</Text>
          <Text>{timeIDShow(content.createdAt)}</Text>
        </View>
        <View style={styles.greetingContainer}>
          <Image source={{ uri: content.image }} style={styles.image} />
          <Text size={12} style={styles.textContent} align="left">
            {content.content}
          </Text>
        </View>
      </ScrollView>
      {/* <Button onPress={onClose}> Tutup </Button> */}
    </Modal>
  );
}

NewsModal.propTypes = {
  visible: PropTypes.number.isRequired,
  onClose: PropTypes.func,
};

const styles = StyleSheet.create({
  modalContainer: {
    width: wp(90),
    height: hp(55),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'white',

    paddingBottom: hp(2),
  },
  scrolCon: {
    paddingVertical: hp(4),
    paddingHorizontal: '10%',
  },
  image: {
    width: wp(70),
    height: hp(20),
    borderRadius: 15,
  },
  greetingContainer: {
    marginTop: hp(1),
  },
  textContent: {
    marginTop: hp(2),
  },
});

export default NewsModal;
