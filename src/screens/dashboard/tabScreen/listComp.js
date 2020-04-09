import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Text from '../../../components/elements/text';

function ClassList({ name, supervisor, place, total }) {
  return (
    <View style={styles.listData}>
      <View style={styles.alCenter}>
        <Text size={18} style={styles.assistantL}>
          Kelas
        </Text>
        <Text size={20} type="semibold">
          {name}
        </Text>
      </View>

      <View style={styles.lineSeparator} />

      <View style={styles.superVisorWrapper}>
        <Text size={14} type="semibold">
          Ust. {supervisor}
        </Text>
        <Text size={12} style={[styles.assistantL, styles.txtGray]}>
          {place}
        </Text>
      </View>

      <View style={styles.alCenter}>
        <Text size={20} type="semibold" style={styles.txtPrimary}>
          {total}
        </Text>
        <Text style={[styles.assistantL, styles.txtPrimary]}>Jumlah Siswa</Text>
      </View>
    </View>
  );
}

export { ClassList };
