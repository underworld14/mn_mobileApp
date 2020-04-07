import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Placeholder, PlaceholderLine, Shine } from 'rn-placeholder';
import PropTypes from 'prop-types';
import { hp } from '../../components/responsive';
import Text from '../../components/elements/text';
import color from '../../theme/color';

function Total({ title, total, type, loading }) {
  return (
    <View style={styles.toCenter}>
      {loading ? (
        <Placeholder Animation={Shine}>
          <PlaceholderLine style={{ height: hp(4) }} />
        </Placeholder>
      ) : (
        <Text size={28} type="semibold">
          {total || '0'}
        </Text>
      )}

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
  loading: PropTypes.bool,
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
