/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {PaperProvider, Searchbar} from 'react-native-paper';

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
});

export default App;
