import React from 'react';
import { View } from 'react-native';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Shine } from 'rn-placeholder';

import styles from './styles';
import Text from '../../../components/elements/text';

function ClassList({ name, supervisor, place, total, loading }) {
  if (loading) {
    return (
      <View style={styles.listData}>
        <Placeholder Animation={Shine} Left={PlaceholderMedia} Right={PlaceholderMedia}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={35} />
        </Placeholder>
      </View>
    );
  }

  return (
    <View style={styles.listData}>
      <View style={styles.alCenter}>
        <Text size={14} style={styles.assistantL}>
          Kelas
        </Text>
        <Text size={14} type="semibold">
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
        <Text size={18} type="semibold" style={styles.txtPrimary}>
          {total}
        </Text>
        <Text style={[styles.assistantL, styles.txtPrimary]}>Jumlah Siswa</Text>
      </View>
    </View>
  );
}

function HostelList({ name, supervisor, total, loading }) {
  if (loading) {
    return (
      <View style={styles.listData}>
        <Placeholder Animation={Shine} Right={PlaceholderMedia}>
          <PlaceholderLine width={70} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </View>
    );
  }
  return (
    <View style={styles.listData}>
      <View style={styles.superVisorWrapper}>
        <Text size={14} type="semibold">
          Rayon {name}
        </Text>
        <Text size={12} style={[styles.assistantL, styles.txtGray]}>
          Ust {supervisor}
        </Text>
      </View>

      <View style={styles.alCenter}>
        <Text size={18} type="semibold" style={styles.txtPrimary}>
          {total}
        </Text>
        <Text style={[styles.assistantL, styles.txtPrimary]}>Jumlah Siswa</Text>
      </View>
    </View>
  );
}

export { ClassList, HostelList };
