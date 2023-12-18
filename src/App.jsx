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
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import {store, persistor} from '../src/redux/store';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Screen
import HomeScreen from './screens/Home.screen';
import DetailRecipeScreen from './screens/DetailRecipe.screen';
import Register from './screens/Register.screen';
import Login from './screens/Login.screen';
import CategoryScreen from './screens/Category.screen';
import HamburgerMenu from './screens/HamburgerMenu.screen';
import Profile from './screens/Profile.screen';

function App() {
  const Stack = createNativeStackNavigator();

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getToken();
    }
  };

  const getToken = async () => {
    const token = await messaging().getToken();

    firestore().collection('tokenList').doc(token).set({});
  };

  React.useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <NavigationContainer>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Detail_Recipe"
                component={DetailRecipeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Category"
                component={CategoryScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Hamburger_Menu"
                component={HamburgerMenu}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </NavigationContainer>
  );
}

export default App;
