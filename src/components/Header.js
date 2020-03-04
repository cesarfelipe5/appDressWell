// importa o react
import React from 'react';
// importa os recursos do native-base
import { Header as NBHeader, Left, Body, Title, Right } from 'native-base';
// importa os recursos do react-native-finer
import { DrawerButton, BackButton } from 'react-native-finer';
// importa o botão que volta ao início da stack
import ButtonToTop from './ButtonToTop';
/**
 * Componente responsável pela header
 */
class Header extends React.Component {
  /**
   * Renderiza o componente
   */
  render = () => {
    // coleta as props
    const { scene: { descriptor: { options: { title, drawer, backToTop } } } } = this.props;
    // retorna a header
    return (
      <NBHeader androidStatusBarColor="#1b0054">
        <Left>
          {drawer ? <DrawerButton /> : backToTop ? <ButtonToTop /> : <BackButton />}
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </NBHeader>
    );
  };
}

// exporta a header
export default props => <Header {...props} />;