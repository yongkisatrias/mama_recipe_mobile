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

function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
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
              left={
                <TextInput.Icon
                  icon={() => <Image source={require('../assets/lock.png')} />}
                />
              }
              style={{marginBottom: 20}}
            />

            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
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
