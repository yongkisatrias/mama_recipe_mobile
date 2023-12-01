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

function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          {/* Searchbar */}
          <Searchbar
            placeholder="Search Pasta, Bread, etc"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchbar}
            placeholderTextColor={'#B6B6B6'}
          />
          {/* Searchbar end */}

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
            <View style={{flexDirection: 'row'}}>
              {[...new Array(8)].map((item, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => navigation.navigate('Detail_Recipe')}>
                  <View style={{marginTop: 10}}>
                    <ImageBackground
                      source={require('../assets/food-1.png')}
                      resizeMode="cover"
                      style={styles.newRecipeImage}>
                      <Text style={styles.newRecipeText}>Banana Lemonilo</Text>
                    </ImageBackground>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          {/* New recipe end */}

          {/* Popular recipe */}
          <Text style={styles.popularRecipeSection}>Popular Recipes</Text>
          {[...new Array(8)].map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => navigation.navigate('Detail_Recipe')}>
              <View style={styles.popularRecipe}>
                <Image source={require('../assets/food-2.png')} />
                <View>
                  <Text style={styles.recipeName}>Teriyaki Salmon</Text>
                  <Text style={styles.recipeCategory}>Spicy, Salted</Text>
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
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
  newRecipeText: {
    color: '#fff',
    padding: 20,
    fontSize: 14,
    fontWeight: 500,
  },
  popularRecipeSection: {
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
