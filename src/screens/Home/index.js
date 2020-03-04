// importa o criador do stack navigator
import { createStackNavigator } from 'react-navigation-stack';
// importa a header
import Header from '../../components/Header';
// importa a home
import Home from './Home';

// exporta a tela da home
export default createStackNavigator({
	// tela inicial da home
	HomeRoot: {
		// tela do inicio
		screen: Home,
		// opções da tela
		navigationOptions: {
			// titulo da tela
			title: 'Início',
			// header da tela
			header: Header,
			// abre o drawer
			drawer: true,
		},
	},
});