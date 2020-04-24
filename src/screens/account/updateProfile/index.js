import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Avatar, ActivityIndicator } from 'react-native-paper';

import styles from './styles';
import { wp } from '../../../components/responsive';
import BackHeader from '../../../components/backHeader';
import Text from '../../../components/elements/text';

import * as authAct from '../../../store/actions/auth';

function Index(props) {
  const teacher = props.auth.credentials.teacher;
  const [profImage, setProfImage] = React.useState(null);
  const [form, setForm] = React.useState({
    name: teacher.name,
    phone: teacher.phone,
    photo: teacher.photo,
  });

  const handleChangeImage = async () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
    })
      .then(data => {
        let imgTemp = {
          uri: data.path,
          type: data.mime,
          width: data.width,
          height: data.height,
        };
        setProfImage(imgTemp);
      })
      .catch(async () => {
        await ImagePicker.clean();
      });
  };

  const handleSubmitRequest = async () => {
    // check if form is edited or not
    if (
      form.name === teacher.name &&
      form.photo === teacher.photo &&
      form.phone === teacher.phone &&
      !profImage
    ) {
      props.navigation.goBack();
    } else {
      const body = new FormData();
      body.append('name', form.name);
      body.append('phone', form.phone);

      if (profImage) {
        let photo = { ...profImage, path: profImage.uri };
        body.append('photo', photo);
      }
      try {
        await props.dispatch(authAct.updateUser(body));
        await props.dispatch(authAct.getMe());
        await props.navigation.navigate('Account');
      } catch (error) {
        console.warn(error);
      }
    }
  };

  const profilePhoto = form.photo
    ? { uri: form.photo }
    : profImage
    ? profImage
    : {
        uri:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3ukkqSZpflIJ0hKRMNrEcJmFGx6CCR-ts4OQGGZwtSLNIgWvJ&usqp=CAU',
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackHeader title="Update Profile" action={() => props.navigation.goBack()} />
        <SaveChange action={handleSubmitRequest} loading={props.auth.isLoading} />
      </View>
      <View style={styles.content}>
        <View style={styles.avatarSection}>
          <TouchableOpacity onPress={handleChangeImage}>
            <Avatar.Image size={wp(30)} source={profilePhoto} />
          </TouchableOpacity>
        </View>

        <View style={styles.updateSection}>
          <FormUser
            title="Nama"
            value={form.name}
            onChangeValue={val => setForm({ ...form, name: val })}
          />
          <FormUser
            title="No. Telp"
            value={form.phone}
            onChangeValue={val => setForm({ ...form, phone: val })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function SaveChange({ title, loading, action }) {
  if (loading) {
    return <ActivityIndicator animating />;
  }

  return (
    <TouchableOpacity onPress={action}>
      <Text size={11}> {title ? title : 'Simpan'} </Text>
    </TouchableOpacity>
  );
}

function FormUser({ title, value, onChangeValue }) {
  return (
    <View style={styles.formInput}>
      <Text size={12} type="semibold">
        {title}
      </Text>
      <TextInput value={value} onChangeText={onChangeValue} />
    </View>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Index);
