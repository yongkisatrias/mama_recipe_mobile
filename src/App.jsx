/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {PaperProvider, Searchbar, Text} from 'react-native-paper';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <PaperProvider>
      <SafeAreaView>
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
        </View>
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
});

export default App;
