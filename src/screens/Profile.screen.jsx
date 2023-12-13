import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.arrowIcon}>
              <Icon name="arrowleft" size={35} color="#fff" />
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/user-profile-dummy.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>Mareta Lopeda</Text>
        </View>
        <View style={styles.mainSection}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    height: 300,
    backgroundColor: '#EEC302',
  },
  mainSection: {
    height: 400,
  },
  arrowIcon: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  profilePicture: {
    width: 95,
    height: 95,
    borderRadius: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
});

export default ProfileScreen;
