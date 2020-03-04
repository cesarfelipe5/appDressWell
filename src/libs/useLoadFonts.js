// importa os react hooks
import { useState, useEffect } from 'react';
// importa os recursos de fonte
import * as Font from 'expo-font';
// importa os icones do expo
import { Ionicons } from '@expo/vector-icons';

// função que carrega as fontes
const useLoadFonts = (fonts) => {
	// define se a aplicação está pronta
	const [ ready, setReady ] = useState();
	// carrega as fontes
	const loadFonts = async () => {
	  await Font.loadAsync({
      /** carrega as fontes */
      ...fonts,
      /** icones padrão do ionicon */
      ...Ionicons.font,
      });
	  // define que o app está pronto
	  setReady(true);
  }
  /**
   * Roda ao iniciar a aplicação
   */
  useEffect(() => {
    // roda a função para carregar as fontes
    loadFonts();
  }, []);
  // retorna se está pronto
  return ready;
}
// exporta a arrow function
export default useLoadFonts;