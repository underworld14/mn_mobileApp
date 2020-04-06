import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../../components/elements/text';
import color from '../../theme/color';

function Total({ title, total, type }) {
  return (
    <View style={styles.toCenter}>
      <Text size={28} type="semibold">
        {total}
      </Text>
      <View style={[styles.textWrap, styles.toCenter]}>
        <View style={[styles.box, { backgroundColor: color[type] }]} />
        <Text style={styles.subTitle} size={12}>
          {title}
        </Text>
      </View>
    </View>
  );
}

Total.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number,
  type: PropTypes.string,
};

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
    fontFamily: 'Assistant-Regular',
  },
});

export default Total;
