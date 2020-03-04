// importa o react
import React, { useEffect } from 'react';
// importa os prop-types
import PropTypes from 'prop-types';
// importa os recursos do native-base
import { View, Text } from 'native-base';
// importa os recursos do react-native
import { ActivityIndicator, StyleSheet } from 'react-native';
// importa os recursos do react-redux
import { useDispatch } from 'react-redux';

/**
 * Renderiza o resolver do app
 */
export default function Resolver(props) {
	// importa o dispatch
	const dispatch = useDispatch();
	// usa o efeito
	useEffect(() => {
		// efetua o dispatch para o resolver
		dispatch({ type: 'APPLICATION_RESOLVE' });
	}, []);
	// se tiver filhos, então é um componente customizado
	if(props.children) {
		// retorna o componente
		return (
			<View style={[ styles.root, props.styles.root ]}>
				{ props.children }
			</View>
		);
	}
	// retorna o componente
	return (
		<View style={[ styles.root, props.styles.root ]}>
			{ React.cloneElement(props.LoaderComponent, { style: [ styles.loader, props.styles.loader ] }) }
			{ React.cloneElement(props.TextComponent, { style: [ styles.text, props.styles.text ], children: props.welcomeText }) }
		</View>
	);
}

/**
 * Props padrão do componente
 */
Resolver.defaultProps = {
	// componente do loader
	LoaderComponent: <ActivityIndicator size="large" />,
	// componente do texto
	TextComponent: <Text>Bem Vindo</Text>,
	// texto de bem vindo
	welcomeText: 'Bem Vindo',
	// styles do componente
	styles: {},
};

/**
 * Tipos das props do componente
 */
Resolver.propTypes = {
	// define o componente do loader
	LoaderComponent: PropTypes.element,
	// define o componente do texto
	TextComponent: PropTypes.element,
	// define o componente das childrens
	children: PropTypes.node,
	// define o texto de bem vindo
	welcomeText: PropTypes.string,
	// define o componente dos styles
	styles: PropTypes.shape({
		// styles do objeto
		root: PropTypes.object,
		// styles do objeto
		loader: PropTypes.object,
		// styles do objeto
		text: PropTypes.object,
	}),
};

/**
 * Styles do componente
 */
const styles = StyleSheet.create({
	// styles do container
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	// styles do loader
	loader: {
		color: '#444',
	},
	// styles do texto do bem vindo
	text: {
		marginTop: 10,
		fontSize: 20,
		color: '#444',
	},
});