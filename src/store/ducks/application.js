// importa o immutable
import Immutable from 'seamless-immutable';
// importa os recursos do reduxsauce
import { createActions, createReducer } from 'reduxsauce';

/**
 * Exporta as constantes e os creators
 */
export const { Types, Creators } = createActions({
	// action que roda para resolver o app
	applicationResolve: null,
	// action para definir a aplicação como pronta
	applicationSetReady: null,
	// action para definer que a aplicação está pensando
	applicationSetThinking: [ 'thinking' ],
});

// define o estado inicial
const INITIAL_STATE = Immutable({
	// define que a aplicação está carregando
	thinking: false,
	// define se a aplicação está ou não pronta
	ready: false,
});

/**
 * Atualiza se a aplicação está pensando
 * @param {{}} state 
 * @param {{}} action
 */
const applicationSetThinking = (state, { thinking }) => ({
	// mantém o state
	...state,
	// define se está ou não pensando
	thinking: thinking,
});

/**
 * Atualiza se a aplicação está pronta
 * @param {{}} state 
 */
const applicationSetReady = (state) => ({
	// mantém o state antigo
	...state,
	// define a aplicação como pronta
	ready: true,
});

// exporta o reducer criado
export default createReducer(INITIAL_STATE, {
	// atualiza se a aplicação está pensando ou não
	[Types.APPLICATION_SET_THINKING]: applicationSetThinking,
	// atualiza se a aplicação está pronta ou não
	[Types.APPLICATION_SET_READY]: applicationSetReady,
});