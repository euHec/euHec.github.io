// import tunes from '../imagens/tunes.mp4'
// import wallet from '../imagens/wallet.mp4'
// import esperancar from '../imagens/esperançar.mp4'
import tunes from '../imagens/tunes.png'
import wallet from '../imagens/wallet.png'
import esperancar from '../imagens/esperancar.png'
import recipes from '../imagens/app.png'

const projectsData = [
  {
    id: 0,
    name: 'TrybeTunes',
    repository: 'https://github.com/euHec/trybe_tunes',
    deploy: 'https://euhec.github.io/trybe_tunes/',
    thumbnails: tunes,
    description: 'TrybeTunes é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada',
    technologies: ['REACT.JS', 'CSS','REDUX'],
  },
  {
    id: 1,
    name: 'TrybeWallet',
    repository: 'https://github.com/euHec/trybe-wallet',
    deploy: 'https://euhec.github.io/trybe-wallet/',
    thumbnails: wallet,
    description: 'Carteira de controle de gastos com conversor de moedas, onde o usuário ao utilizar pode adicionar, remover, editar um gasto, visualizar uma tabelas com seus gastos e de gastos convertidos para uma moeda de escolha',
    technologies: ['REACT.JS', 'CSS', 'REDUX'],
  },
  {
    id: 2,
    name: 'App de receitas',
    repository: 'https://github.com/euHec/recipes_app',
    deploy: 'https://euhec.github.io/recipes_app/',
    thumbnails: recipes,
    description: 'Nessa aplicação é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas!',
    technologies: ['REACT.JS', 'CSS', 'TAILWINDCSS', 'CONTEXT API'],
  },
  {
    id: 3,
    name: 'Movimento Esperançar',
    repository: 'https://github.com/euHec/projeto_esperancar',
    deploy: 'https://euhec.github.io/projeto_esperancar/',
    thumbnails: esperancar,
    description: 'Landing Page desenvolvida para o Movimento Esperançar, que tem como objetivo evangelizar jovens da paróquia local. A LP foi desenvolvida para além de passar informações, facilitar a inscrição e gerenciamento das inscrições, visto que está integrada a uma planilha com fácil acesso aos coordenadores',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'TAILWINDCSS'],
  }
]

export default projectsData;

// {
//   name: 'Meu Redirect',
//   repository: 'https://github.com/euHec/meu-redirect',
//   deploy: 'https://euhec.github.io/meu-redirect/',
//   thumbnails: '',
//   description: 'Meu Redirect é uma empresa que redireciona produtos do EUA e a aplicação foi desenvolvida com o intuito de facilitar aos clientes o calculo dos produtos que eles tem interesse. O usuário consegue dar o nome ao produto que deseja o seu valor em dólar e já ter uma noção do valor convertido. A aplicação conta também com um carrinho que já retorno o valor total dos produtos convertidos, acrecidos do valor da taxa de serviço de acordo com o valor total do produto',
//   technologies: ['REACT.JS', 'CSS', 'CONTEXT API'],
// },