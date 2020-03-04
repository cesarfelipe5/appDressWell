// importa os recursos do react-native-finer-redux
import { createDefaultStore } from 'react-native-finer-redux';
// importa os reducers
import reducers from './ducks';
// importa os sagas
import sagas from './sagas';

// inicializa a store
const store = createDefaultStore({ reducers: { ...reducers }, sagas: [ ...sagas ] });

// exporta a função da store
export default store;