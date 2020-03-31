import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Text from '../elements/text';
import { menuIcon } from '../../assets';

function index({ name, goTo }) {
  let source;
  let title;

  switch (name) {
    case 'student':
      source = menuIcon.students;
      title = 'Siswa';
      break;

    case 'permission':
      source = menuIcon.permission;
      title = 'Perizinan';
      break;

    case 'illness':
      source = menuIcon.illness;
      title = 'Kesehatan';
      break;

    case 'violation':
      source = menuIcon.violation;
      title = 'Pelanggaran';
      break;

    default:
      source = null;
  }

  return (
    <TouchableOpacity style={styles.toCenter} onPress={goTo}>
      <Image source={source} style={styles.iconSize} />
      <Text size={12} style={styles.menuLabel}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

index.propTypes = {
  name: PropTypes.oneOf(['student', 'permission', 'illness', 'violation']).isRequired,
  goTo: PropTypes.func,
};

const styles = StyleSheet.create({
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  iconSize: {
    width: wp(12),
    height: wp(12),
  },
  menuLabel: {
    marginTop: 5,
    fontFamily: 'Assistant-Light',
  },
});

export default index;
