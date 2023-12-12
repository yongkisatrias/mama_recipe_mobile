import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Searchbar, Text} from 'react-native-paper';
import recipeList from '../data/recipe.json';

function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          <View style={{flexDirection: 'row', gap: 20}}>
            {/* Searchbar */}
            <View style={{width: '85%'}}>
              <Searchbar
                placeholder="Search Pasta, Bread, etc"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchbar}
                placeholderTextColor={'#B6B6B6'}
              />
            </View>
            {/* Hamburger Menu */}
            <View style={{width: '15%', marginTop: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Hamburger_Menu')}>
                <Image
                  source={require('../assets/hamburger-menu.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Popular section */}
          <Text style={styles.popularSection}>Popular for You</Text>
          <View style={styles.popularImage}>
            {[
              {
                icons: <Image source={require('../assets/hot-soup.png')} />,
                label: 'Soup',
              },
              {
                icons: (
                  <Image source={require('../assets/roasted-chicken.png')} />
                ),
                label: 'Chicken',
              },
              {
                icons: <Image source={require('../assets/fish.png')} />,
                label: 'Seafood',
              },
              {
                icons: <Image source={require('../assets/pancake.png')} />,
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
            <View style={{flexDirection: 'row', gap: 20}}>
              {recipeList
                ?.filter(item => item.isNew)
                .map((item, key) => (
                  <TouchableOpacity
                    key={key}
                    onPress={() => navigation.navigate('Detail_Recipe', item)}>
                    <View style={{marginTop: 10}}>
                      <ImageBackground
                        source={{uri: item.image}}
                        resizeMode="cover"
                        imageStyle={{borderRadius: 10}}
                        style={styles.newRecipeImage}>
                        <Text style={styles.newRecipeText}>{item.title}</Text>
                        <View style={styles.rateNewRecipe}>
                          <Image source={require('../assets/icon-star.png')} />
                          <Text style={styles.rateTextNewRecipe}>4.7</Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
          {/* New recipe end */}

          {/* Popular recipe */}
          <Text style={styles.popularRecipeSection}>Popular Recipes</Text>
          {recipeList
            ?.filter(item => item.isPopular)
            .map((item, key) => (
              <TouchableOpacity
                key={key}
                onPress={() => navigation.navigate('Detail_Recipe', item)}>
                <View style={styles.popularRecipe}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 60, height: 60}}
                  />
                  <View>
                    <Text style={styles.recipeName}>{item.title}</Text>
                    <Text style={styles.recipeCategory}>{item.category}</Text>
                    <View style={styles.rate}>
                      <Image source={require('../assets/icon-star.png')} />
                      <Text style={styles.rateText}>4.7</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          {/* Popular recipe end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
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
    fontSize: 18,
    fontWeight: 700,
    marginTop: 20,
  },
  newRecipeImage: {
    height: 160,
    width: 130,
    justifyContent: 'flex-end',
  },
  newRecipeText: {
    color: '#fff',
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 800,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  rateNewRecipe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    gap: 5,
  },
  rateTextNewRecipe: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 400,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  popularRecipeSection: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 700,
  },
  popularRecipe: {
    flexDirection: 'row',
    gap: 15,
    paddingTop: 15,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 500,
  },
  recipeCategory: {
    fontSize: 12,
    fontWeight: 400,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rateText: {
    fontSize: 12,
    fontWeight: 400,
  },
});

export default HomeScreen;
