import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { wp } from './responsive';
import Text from './elements/text';

function backHeader({ action }) {
  return (
    <TouchableOpacity style={styles.backContainer} onPress={action}>
      <Icon name="arrow-left" size={wp(6)} />
      <Text size={14} type="semibold" style={styles.text}>
        Kembali
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
});

export default backHeader;
