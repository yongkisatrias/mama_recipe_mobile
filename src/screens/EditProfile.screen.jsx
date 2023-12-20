import React from 'react';
import {Button, Text, TextInput, Snackbar} from 'react-native-paper';
import {StyleSheet, View, Pressable} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';

function EditProfileScreen({navigation}) {
  const [fullname, setFullname] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [messagesSnackbar, setMessagesSnackbar] = React.useState('');
  const [snackbarBackground, setSnackbarBackground] = React.useState('');

  const onDismissSnackBar = () => setVisible(false);

  const [userAdd, setUserAdd] = React.useState();

  const handleUpdate = () => {
    firestore()
      .collection('users')
      .doc('daQEbeUR3Ue96fm8vTOY')
      .update({
        fullname: fullname,
        phone: phoneNumber,
      })
      .then(() => {
        setVisible(true);
        setMessagesSnackbar('Update Data Success');
        setSnackbarBackground('#75b798');

        setTimeout(() => {
          navigation.navigate('Home');
        }, 2000);
      });
  };
  return (
    <>
      <View style={style.container}>
        {/* Snackbar */}
        <Snackbar
          wrapperStyle={{top: 0}}
          style={{backgroundColor: snackbarBackground, zIndex: 999}}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'x',
            onPress: () => {
              onDismissSnackBar;
            },
          }}>
          <Text style={{color: '#fff'}}>{messagesSnackbar}</Text>
        </Snackbar>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={style.profileNav}>
            <Antdesign name="arrowleft" size={30} color="#000" />
            <Text
              variant="headlineMedium"
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#DAA520',
              }}>
              Edit Profile
            </Text>
          </View>
        </Pressable>
        {/* Input */}
        <TextInput
          style={style.inputBar}
          label="Name"
          placeholder="Your Name Here"
          mode="outlined"
          onChangeText={setFullname}
          value={fullname}
        />

        <TextInput
          style={style.inputBar}
          label="Phone Number"
          placeholder="Phone Number"
          mode="outlined"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />

        {/* Button */}
        <Button mode="elevated" onPress={handleUpdate}>
          Update Profile
        </Button>

        <Text
          variant="headlineSmall"
          style={{textAlign: 'center', marginTop: 15}}>
          {userAdd}
        </Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  profileNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70,
    marginBottom: 30,
  },
  inputBar: {
    marginBottom: 20,
  },
});

export default EditProfileScreen;
