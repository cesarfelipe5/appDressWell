// importa o react
import React from 'react';
// importa os recursos do react-native
import { StyleSheet, Text } from 'react-native';
// importa os componentes do native-base
import { Container } from 'native-base';

/**
 * Componente responsável por renderizar a tela da home
 */
export default function Home(props) {
	/**
	 * Roda ao pressionar o botão de navegar
	 */
	const handleNavigate = routeName => () => {
		// navega para a tela desejada
		props.navigation.navigate(routeName);
	};
	// retorna a tela
	return (
		<Container style={styles.container}>
			<Text>Modelo React Native - Finer</Text>
		</Container>
	);
}

// styles do componente
const styles = StyleSheet.create({
	// styles do container
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});