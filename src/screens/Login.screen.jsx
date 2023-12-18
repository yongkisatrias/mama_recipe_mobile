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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import * as auth from '../redux/slices/auth';

function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [messagesSnackbar, setMessagesSnackbar] = React.useState('');
  const [snackbarBackground, setSnackbarBackground] = React.useState('');

  const {users} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onDismissSnackBar = () => setVisible(false);

  const handleLogin = () => {
    firestore()
      .collection('users')
      .where('email', '==', email.toLowerCase())
      .get()
      .then(async querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push(documentSnapshot);
        });

        if (tempData.length === 0) {
          setVisible(true);
          setMessagesSnackbar('Email not found');
          setSnackbarBackground('#ea868f');
        } else {
          if (tempData[0]?._data?.password === password.toLowerCase()) {
            dispatch(auth.setUsers(tempData[0]._data));
            setVisible(true);
            setMessagesSnackbar('Login success');
            setSnackbarBackground('#75b798');

            await AsyncStorage.setItem(
              'user',
              JSON.stringify(tempData[0]._data),
            );
            setTimeout(() => {
              navigation.navigate('Home');
            }, 2000);
          } else {
            setVisible(true);
            setMessagesSnackbar('Password incorrect');
            setSnackbarBackground('#ea868f');
          }
        }
      })
      .catch(error => {
        console.log(error);
        setVisible(true);
        setMessagesSnackbar('Something wrong in our server');
        setSnackbarBackground('#ea868f');
      });
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
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.arrowIcon}>
              <Icon name="arrowleft" size={30} color="#999999" />
            </View>
            <View style={styles.mamaRecipeIcon}>
              <Image source={require('../assets/mama-recipe.png')} />
            </View>
          </TouchableOpacity>
          <Text style={styles.mainTitle}>Welcome !</Text>
          <Text style={styles.secondTitle}>
            Log in to your exiting account.
          </Text>
          <View style={{padding: 25, marginTop: 25}}>
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
              placeholder="Password"
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

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.registerButton}>
              Log In
            </Button>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.leftTitle}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.rightTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 15,
    marginLeft: 15,
  },
  mamaRecipeIcon: {
    alignItems: 'center',
    marginTop: 10,
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

export default LoginScreen;
