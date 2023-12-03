/* eslint-disable react-native/no-inline-styles */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen
import HomeScreen from './screens/Home.screen';
import DetailRecipeScreen from './screens/DetailRecipe.screen';
import Register from './screens/Register.screen';
import Login from './screens/Login.screen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail_Recipe"
            component={DetailRecipeScreen}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
