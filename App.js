import { StatusBar, SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat"

import Basket from './src/views/basket/Basket';

import mock from './src/mocks/basket'

export default function App() {
  const [fontLoaded] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold,
  })

  if (!fontLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#5E8D48" barStyle="dark-content" /> 
      <Basket {...mock} />
    </SafeAreaView>
  );
}