/* eslint-disable react-native/no-inline-styles */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {PaperProvider, Searchbar, Text} from 'react-native-paper';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.root}>
            <Searchbar
              placeholder="Search Pasta, Bread, etc"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.searchbar}
              placeholderTextColor={'#B6B6B6'}
            />
            {/* Popular section */}
            <Text style={styles.popularSection}>Popular for You</Text>
            <View style={styles.popularImage}>
              {[
                {
                  icons: <Image source={require('./assets/assets-1.png')} />,
                  label: 'Soup',
                },
                {
                  icons: <Image source={require('./assets/assets-2.png')} />,
                  label: 'Chicken',
                },
                {
                  icons: <Image source={require('./assets/assets-3.png')} />,
                  label: 'Seafood',
                },
                {
                  icons: <Image source={require('./assets/assets-2.png')} />,
                  label: 'Dessert',
                },
              ].map((item, key) => (
                <View key={key}>
                  {item.icons}
                  <Text style={styles.popularText}>{item.label}</Text>
                </View>
              ))}
            </View>
            {/* Popular section end */}

            {/* New recipe */}
            <Text style={styles.newRecipesSection}>New Recipes</Text>
            <ScrollView horizontal>
              <View style={{flexDirection: 'row'}}>
                {[...new Array(8)].map((item, key) => (
                  <View>
                    <ImageBackground
                      source={require('./assets/food-1.png')}
                      resizeMode="cover"
                      style={styles.newRecipeImage}
                      key={key}>
                      <Text style={styles.newRecipeText}>Banana Lemonilo</Text>
                    </ImageBackground>
                  </View>
                ))}
              </View>
            </ScrollView>
            {/* New recipe end */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    padding: 20,
  },
  searchbar: {
    backgroundColor: '#EFEFEF',
  },
  popularSection: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
  },
  popularImage: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popularText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 500,
    marginTop: 5,
  },
  newRecipesSection: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 20,
  },
  newRecipeImage: {
    height: 160,
    width: 130,
    paddingLeft: 0,
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
  newRecipeText: {
    color: '#fff',
    padding: 20,
    fontSize: 14,
    fontWeight: 500,
  },
});

export default App;
