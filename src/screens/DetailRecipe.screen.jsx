import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function DetailRecipeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          <ImageBackground
            source={require('../assets/dummy-pic.png')}
            style={styles.heroImage}
            resizeMode="cover">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.arrowIcon}>
                <Icon name="arrowleft" size={30} color="#fff" />;
              </Text>
            </TouchableOpacity>
            <View style={styles.heroTitle}>
              <Text style={styles.foodTitle}>Sandwich with Egg</Text>
              <Text style={styles.chefName}>By Chef Ronald Humson</Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heroImage: {
    height: 400,
  },
  arrowIcon: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  heroTitle: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  foodTitle: {
    color: '#FBFBFB',
    fontSize: 32,
    fontWeight: '800',
  },
  chefName: {
    color: '#B0B0B0',
    fontSize: 15,
    fontWeight: '400',
  },
});

export default DetailRecipeScreen;
