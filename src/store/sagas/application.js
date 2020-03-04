// importa os recursos do redux-saga
import { all, call, put, takeLeading } from 'redux-saga/effects';
// importa o serviço de navegação
import NavigationService from 'react-native-finer-navigation';
// importa os recursos do dispositivo
import { storeDevice } from 'react-native-finer-device';
// importa as ações do reducer da aplicação
import { Types, Creators as ApplicationActions } from '../ducks/application';

/**
 * Função que resolve o app
 */
function* resolve() {
	// tenta executar o código
	try {
		// chama a ação para guardar o dispositivo
		yield call(storeDevice);
		// navega para a tela principal
		yield call([ NavigationService, 'navigate' ], { routeName: 'Main' });
		// atualiza a aplicação para pronta
		yield put(ApplicationActions.applicationSetReady());
	// caso de algum erro
	} catch(e) {
		// informativo
		yield call(console.log, e);
	}
}

/**
 * Função responsável por inicializar o saga
 */
export default function* () {
	// roda todas simultaneamente
	yield all([
		// para a primeira ação de resolve
		yield takeLeading(Types.APPLICATION_RESOLVE, resolve),
	]);
}