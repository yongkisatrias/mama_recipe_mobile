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
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileScreen({navigation}) {
  const [data, setData] = React.useState({});

  (async () => {
    const user = await AsyncStorage.getItem('user');
    setData(JSON.parse(user));
  })();

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
            source={require('../assets/user-profile-icon.png')}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>{data?.fullname ?? 'Username'}</Text>
        </View>
        <View style={styles.mainSection}>
          <View>
            <View style={styles.editProfileSection}>
              <View style={styles.editProfile}>
                <Image
                  source={require('../assets/user-profile.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{fontSize: 20, fontWeight: 500}}>
                  Edit Profile
                </Text>
              </View>
              <Icon name="right" size={25} color="green" />
            </View>
            <View style={styles.editProfileSection}>
              <View style={styles.editProfile}>
                <Image
                  source={require('../assets/award.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{fontSize: 20, fontWeight: 500}}>My Recipe</Text>
              </View>
              <Icon name="right" size={25} color="green" />
            </View>
            <View style={styles.editProfileSection}>
              <View style={styles.editProfile}>
                <Image
                  source={require('../assets/bookmark.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{fontSize: 20, fontWeight: 500}}>
                  Saved Recipe
                </Text>
              </View>
              <Icon name="right" size={25} color="green" />
            </View>
            <View style={styles.editProfileSection}>
              <View style={styles.editProfile}>
                <Image
                  source={require('../assets/liked.png')}
                  style={{width: 30, height: 30}}
                />
                <Text style={{fontSize: 20, fontWeight: 500}}>
                  Liked Recipe
                </Text>
              </View>
              <Icon name="right" size={25} color="green" />
            </View>
          </View>
        </View>
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -40,
    backgroundColor: 'white',
    height: 500,
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
  editProfileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 35,
  },
  editProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});

export default ProfileScreen;
