import React from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HamburgerMenu({navigation}) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setTimeout(() => {
      navigation.navigate('Home');
    });
  };

  const [cekUser, setUser] = React.useState(null);

  (async () => {
    const user = await AsyncStorage.getItem('user');
    setUser(user);
  })();

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#EEC302', height: '100%'}}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.arrowIcon}>
              <Icon name="arrowleft" size={30} />
            </Text>
          </TouchableOpacity>
          <View style={styles.menuOptions}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.homeMenu}>Home</Text>
            </TouchableOpacity>
            {!cekUser ? (
              <View
                style={{
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginMenu}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.registerMenu}>Register</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}>
                  <Text style={styles.profileMenu}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.logoutMenu} onPress={handleLogout}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arrowIcon: {
    marginTop: 20,
    marginLeft: 20,
  },
  menuOptions: {
    alignItems: 'center',
    marginTop: 150,
  },
  homeMenu: {
    fontSize: 30,
    fontWeight: '600',
  },
  loginMenu: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: '600',
  },
  registerMenu: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: '600',
  },
  profileMenu: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: '600',
  },
  logoutMenu: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: '600',
  },
});

export default HamburgerMenu;
