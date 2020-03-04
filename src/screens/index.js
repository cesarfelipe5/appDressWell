// coleta os recursos de rotas do react-navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// importa os recursos de criação de um drawer
import { createDrawerNavigator } from 'react-navigation-drawer';
// importa o componente do resolver
import Resolver from '../components/Resolver';
// importa o componente da Home
import Home from './Home';

// inicializa o drawer
const DrawerNavigation = createDrawerNavigator({
  // define a rota para as abas da rota de cobrança
  Home: {
    // tela principal da rota
    screen: Home,
    // opções de navegação
    navigationOptions: {
      // titulo da tela
      title: 'Início',
    },
  },
}, {
  // rota inicial da navegação
  initialRouteName: 'Home',
});

// define o endpoint inicial do app
const Navigator = createSwitchNavigator({
  // fluxo do app com usuário logado
  Main: DrawerNavigation,
  // abre a tela de resolver
  Resolver: Resolver,
}, {
  initialRouteName: 'Resolver',
});

// exporta o app com navegação inicializado
export default createAppContainer(Navigator);