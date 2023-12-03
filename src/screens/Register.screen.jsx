import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function RegisterScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
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
              onPress={() => console.log('Pressed')}
              style={styles.registerButton}>
              Create Account
            </Button>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.leftTitle}>Already have account? </Text>
            <TouchableOpacity>
              <Text style={styles.rightTitle}>Log in Here</Text>
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
