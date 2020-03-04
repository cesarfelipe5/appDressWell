// importa o react
import React, { useState, useEffect } from 'react';
// importa os recursos do react-redux
import { Provider } from 'react-redux';
// importa os recursos do native-base
import { StyleProvider } from 'native-base';
// importa os recursos do react-native-finer
import { Thinking } from 'react-native-finer';
// importa o serviço de navegação
import NavigationService from 'react-native-finer-navigation';
// importa os recursos de fonte
import * as Font from 'expo-font';
// importa os icones do expo
import { Ionicons } from '@expo/vector-icons';
// importa a store
import store from './src/store';
// importa o tema
import getTheme from './native-base-theme/components';
// importa as telas do app
import Screens from './src/screens';
// importa a lib das fontes
import useLoadFonts from './src/libs/useLoadFonts';

// Exporta o aplicativo
export default function App() {
  // carrega as fontes
  const fontsReady = useLoadFonts({
    /** importa a fonte roboto */
    'roboto': require('native-base/Fonts/Roboto.ttf'),
    /** importa a fonte roboto medium */
    'roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    /** roboto medium */
    'RobotoCondensed': require('./assets/fonts/Roboto_Condensed/RobotoCondensed.ttf'),
    /** roboto medium */
    'RobotoCondensed_bold': require('./assets/fonts/Roboto_Condensed/RobotoCondensed_bold.ttf'),
  });
  /**
   * Define o navigator
   */
  const handleNavigationRef = navigator => {
    // atribui o navigator
    NavigationService.navigator = navigator;
  };
  // se as fontes não estiverem prontas
  if(!fontsReady) {
    // retorna vazio
    return null;
  }
  // retorna o app
  return (
    <Provider store={store}>
      <StyleProvider style={getTheme()}>
        <React.Fragment>
          <Screens ref={handleNavigationRef} />
        </React.Fragment>
      </StyleProvider>
    </Provider>
  );
}

