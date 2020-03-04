/** importa o react */
import React from 'react';
/** importa os recursos do native-base */
import { Button, Icon } from 'native-base';
/** importa os recursos do react-navigation */
import { withNavigation } from 'react-navigation';

class ButtonToTop extends React.PureComponent {
  /**
   * Roda quando o usuário pressiona o botão
   */
  handlePress = () => {
    /** voltar para a tela anterior */
    this.props.navigation.popToTop();
  };
  /**
   * Renderiza um botão que abre o drawer
   */
  render = () =>  {
    return (
      <Button onPress={this.handlePress} transparent>
        {this.props.children}
      </Button>
    );
  };
}

ButtonToTop.defaultProps = {
  children: <Icon name="arrow-back" />,
}

/** exporta o botão */
export default withNavigation(ButtonToTop);