import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../components/elements/text';

function Total({ title, total, color }) {
  return (
    <View style={styles.toCenter}>
      <Text size={36} type="semibold">
        {total}
      </Text>
      <View style={[styles.textWrap, styles.toCenter]}>
        <View style={[styles.box, { backgroundColor: color }]} />
        <Text style={styles.subTitle} size={14}>
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  toCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrap: {
    flexDirection: 'row',
  },
  box: {
    width: 10,
    height: 10,

    marginHorizontal: 5,
  },
  subTitle: {
    fontFamily: 'Assistant-Light',
  },
});

export default Total;
