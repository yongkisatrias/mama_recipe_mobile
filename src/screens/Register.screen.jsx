import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, TextInput, Button, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import firestore from '@react-native-firebase/firestore';

function RegisterScreen({navigation}) {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);
  const [messagesSnackbar, setMessagesSnackbar] = React.useState('');
  const [snackbarBackground, setSnackbarBackground] = React.useState('');

  const handleRegister = () => {
    if (fullname && email && phone && password && password2) {
      if (password === password2) {
        firestore()
          .collection('users')
          .add({
            fullname: fullname,
            email: email.toLowerCase(),
            phone: phone,
            password: password.toLowerCase(),
            created_at: new Date().getTime(),
          })
          .then(() => {
            setVisible(true);
            setMessagesSnackbar('Successfully registered');
            setSnackbarBackground('#75b798');

            setTimeout(() => {
              navigation.navigate('Login');
            }, 2000);
          })
          .catch(() => {
            setVisible(true);
            setMessagesSnackbar('Something wrong in our server');
            setSnackbarBackground('#ea868f');
          });
      } else {
        setVisible(true);
        setMessagesSnackbar('Password confirm not match');
        setSnackbarBackground('#ea868f');
      }
    } else {
      setVisible(true);
      setMessagesSnackbar('Please fill all data');
      setSnackbarBackground('#ea868f');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
        {/* Snackbar end */}

        {/* Register section */}
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.arrowIcon}>
              <Icon name="arrowleft" size={30} color="#999999" />
            </View>
          </TouchableOpacity>
          <Text style={styles.mainTitle}>Let’s Get Started !</Text>
          <Text style={styles.secondTitle}>
            Create new account to access all feautures
          </Text>
          <View style={{padding: 25, marginTop: 25}}>
            <TextInput
              placeholder="Name"
              mode="outlined"
              onChangeText={value => setFullname(value)}
              left={
                <TextInput.Icon
                  icon={() => <Image source={require('../assets/user.png')} />}
                />
              }
              style={{marginBottom: 20}}
            />
            <TextInput
              placeholder="E-Mail"
              mode="outlined"
              keyboardType="email-address"
              onChangeText={value => setEmail(value)}
              left={
                <TextInput.Icon
                  icon={() => <Image source={require('../assets/mail.png')} />}
                />
              }
              style={{marginBottom: 20}}
            />
            <TextInput
              placeholder="Phone Number"
              mode="outlined"
              keyboardType="phone-pad"
              onChangeText={value => setPhone(value)}
              left={
                <TextInput.Icon
                  icon={() => <Image source={require('../assets/phone.png')} />}
                />
              }
              style={{marginBottom: 20}}
            />
            <TextInput
              placeholder="Create New Password"
              mode="outlined"
              secureTextEntry
              onChangeText={value => setPassword(value)}
              left={
                <TextInput.Icon
                  icon={() => <Image source={require('../assets/lock.png')} />}
                />
              }
              style={{marginBottom: 20}}
            />
            <TextInput
              placeholder="Confirm New Password"
              mode="outlined"
              secureTextEntry
              onChangeText={value => setPassword2(value)}
              left={
                <TextInput.Icon
                  icon={() => (
                    <Image source={require('../assets/unlock.png')} />
                  )}
                />
              }
              style={{marginBottom: 20}}
            />

            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.registerButton}>
              Create Account
            </Button>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.leftTitle}>Already have account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.rightTitle}>Log in Here</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Register section end */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 15,
    marginLeft: 15,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 800,
    color: '#EFC81A',
    textAlign: 'center',
    marginTop: 30,
  },
  secondTitle: {
    fontSize: 15,
    fontWeight: 400,
    color: '#999999',
    textAlign: 'center',
  },
  registerButton: {
    borderRadius: 5,
    backgroundColor: '#EFC81A',
    paddingVertical: 5,
    marginTop: 10,
  },
  bottomText: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: '#999999',
  },
  rightTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: '#EFC81A',
  },
});

export default RegisterScreen;
