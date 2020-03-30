import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

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
      <Text style={styles.menuLabel}> {title} </Text>
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
    width: 57,
    height: 57,
  },
  menuLabel: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Assistant-Light',
  },
});

export default index;
