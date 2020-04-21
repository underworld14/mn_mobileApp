import React from 'react';
import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { Avatar } from 'react-native-paper';

import BackHeader from '../../../components/backHeader';
import { wp, hp } from '../../../components/responsive';
import Text from '../../../components/elements/text';
import colors from '../../../theme/color';

function Index(props) {
  const [form, setForm] = React.useState({
    name: 'Naufal Adam Fadillah',
    email: 'naufaladam@gmail.com',
    phone: '081252183757',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackHeader action={() => props.navigation.goBack()} />
      </View>
      <View style={styles.content}>
        <View style={styles.avatarSection}>
          <Avatar.Image
            size={wp(30)}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3ukkqSZpflIJ0hKRMNrEcJmFGx6CCR-ts4OQGGZwtSLNIgWvJ&usqp=CAU',
            }}
          />
        </View>

        <View style={styles.updateSection}>
          <View style={styles.formInput}>
            <Text size={12} type="semibold">
              Nama
            </Text>
            <TextInput
              value={form.name}
              onChangeText={val => setForm({ ...form, name: val })}
              style={styles.textInput}
            />
          </View>

          <View style={styles.formInput}>
            <Text size={12} type="semibold">
              Email
            </Text>
            <TextInput
              value={form.email}
              onChangeText={val => setForm({ ...form, email: val })}
              style={styles.textInput}
            />
          </View>

          <View style={styles.formInput}>
            <Text size={12} type="semibold">
              Handphone
            </Text>
            <TextInput
              value={form.phone}
              onChangeText={val => setForm({ ...form, phone: val })}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingHorizontal: wp(5),
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    flex: 11,
    // backgroundColor: colors.gray3,
  },
  avatarSection: {
    marginVertical: hp(4),
    alignItems: 'center',
  },
  updateSection: {},
  formInput: {
    height: hp(8),
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    marginTop: 2,
    // justifyContent: 'center',
    paddingVertical: hp(1),
  },
  textInput: {
    fontFamily: 'Assistant-Semibold',
    fontSize: 16,
    lineHeight: 15,
  },
});

export default Index;
