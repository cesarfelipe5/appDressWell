// inicializador das variáveis
import initialize from 'environment-control';
// ambiente padrão / desenvolvimento
import _default from './environment';
// ambiente de produção
import production from './environment.production';

// exporta uma função para que assim que o arquivo seja importado já configure.
export default initialize({ 
  /** padrão, também usado quando está em desenvolvimento */
  _default,
  /** produção, somente usado quando o app é buildado */
  production, 
}, {
  /** pode visualizar os console.log */
  debug: true, 
});