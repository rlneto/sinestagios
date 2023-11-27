# SINEstágios

## Equipe
- Betina Corazza Ferrão
- Larissa Slomski
- Mariana Amaral Steffen
- Rafaela Silva Borges
- Rudolfo Lange Neto

#### Informações técnicas

_Tipo de case: PascalCase_

_Stack utilizada: MERN_

- _React.js + Vite_
- _Node.js_
- _Express.js_
- _Mongoose_
  
**Protótipo para o Design:** https://whimsical.com/trab-web-5ZtyzQn4Qg9PZxqPYu8ypr


## CSS

_O CSS está presente em dois módulos, o Shared.modules.css e o relativo ao componente (por exemplo HomeLayout.modules.css), presentes na pasta src/styles/_

_Os módulos são carregados no css e cada propriedade possui uma classe própria, as classes são chamadas individualmente com a propriedade className no JSX correspondente_

## Single Page Application (SPA)
O frontend é uma Single Page Application (SPA) desenvolvida com o uso de React. A estrutura básica consiste em três componentes principais:

Navbar:
O componente Navbar representa a barra de navegação superior. Ele contém links e elementos de navegação importantes para a aplicação.

Outlet:
O componente Outlet é onde os diferentes componentes são renderizados dinamicamente, dependendo da rota atual. Ele funciona como o ponto de entrada principal para os diversos conteúdos exibidos na aplicação.

Footer:
O componente Footer representa o rodapé da página. Ele contém informações adicionais e links úteis.

#### Context API para Compartilhamento de Estado do Usuário 
Para gerenciar o estado do usuário em toda a aplicação, foi utilizada a Context API do React. Essa API permite compartilhar o estado do usuário com todos os componentes da aplicação sem a necessidade de passar props manualmente entre componentes aninhados.


## PAGES
#### main.jsx
Este arquivo é o inicial da aplicação React, onde o ReactDOM é usado para criar uma raiz de renderização assíncrona (createRoot) e renderizar o componente principal da aplicação (<App />) dentro dela. O modo estrito (<React.StrictMode>) envolve o componente principal para realizar verificações adicionais e melhorar a qualidade do código.

#### App.jsx
Este código cria um ambiente básico para uma aplicação utilizando React Router, Hooks de estado (useState), e Context API para gerenciar informações globais da aplicação. As rotas são configuradas e os componentes de página estão prontos para serem renderizados quando as rotas forem acionadas.

#### DashboardLayout.jsx:
Esse arquivo define um layout para a aplicação, fornecendo uma estrutura básica com um cabeçalho, uma área central para conteúdo dinâmico e um rodapé, e o <Outlet /> permite que os componentes das rotas sejam renderizados no local apropriado dentro desse layout.

#### HomeLayout.jsx:
Esse layout define a estrutura básica da página inicial da aplicação, incluindo a barra de navegação (Navbar), o conteúdo da página renderizado dinamicamente (Outlet), e o rodapé (Footer). Com base nas classes de estilo aplicadas, há uma distribuição e formatação específicas para os elementos na página inicial.

#### index.js:
Esse código exporta vários componentes React de diferentes arquivos. Cada linha export está exportando o componente padrão de um arquivo específico, permitindo que esses componentes sejam importados e usados em outros arquivos. Esse código é útil para modularizar e organizar o código, permitindo que os componentes sejam facilmente acessíveis e reutilizáveis em diferentes partes de um projeto.

#### Error.jsx:
Esse componente é uma maneira de lidar com erros de rota na aplicação, fornecendo uma mensagem de erro e a opção de retornar para a página inicial quando ocorre um erro de navegação.

#### AllEstagios.jsx:
Este código representa uma página que lista vagas de estágio em um formato de cards, exibindo informações detalhadas sobre cada vaga e fornecendo um botão para enviar mensagens relacionadas a essas vagas.

#### AddEstagios.jsx:
Esse componente cria um formulário para inserir informações sobre uma vaga de estágio e adicioná-la à lista de vagas existentes.

#### Inbox.jsx
Esse código cria uma visualização da caixa de entrada e saída de mensagens para o usuário logado, permitindo que ele veja suas mensagens recebidas e enviadas em um formato organizado, usando componentes como Card para estruturar e exibir as informações das mensagens.

#### Login.jsx
Esse código permite que os usuários insiram suas credenciais (email e senha), realiza a validação desses dados e executa algumas ações com base nessa validação. No LoginHandler, ocorre o processamento do login. Quando o usuário clica no botão "Entrar", essa função é acionada. Ela pega os valores dos campos de e-mail e senha, realiza uma requisição POST para a API de login com essas credenciais e, se for bem-sucedida, atualiza o estado de login, define os dados do usuário, e redireciona para a página de dashboard. Em caso de erro de senha incorreta ou usuário não encontrado, exibe alertas e redireciona de volta para a página de login.

#### Mensagem.jsx
Este componente React fornece uma interface para o usuário enviar mensagens, processando essas mensagens e atualizando as caixas de entrada dos destinatários e remetente.

#### Profile.jsx
Este arquivo renderiza uma página de perfil do usuário com informações como nome, email, gênero, data de nascimento e uma imagem. Além disso, fornece botões para editar o perfil e acessar a caixa de entrada de mensagens. A função Profile é o componente principal, pois, renderiza um componente Card que contém informações do perfil do usuário, como nome, email, gênero, data de nascimento e uma imagem

#### Register.jsx
Este, é uma página de registro de usuário que interage com uma API para criar novos usuários e utiliza o Material-UI para alguns componentes visuais. Renderiza um formulário de cadastro com campos para nome, e-mail, senha e confirmação de senha

#### UpdateUser.jsx
É uma página de atualização de dados do usuário, permitindo que o usuário modifique informações como nome, data de nascimento, gênero e link da imagem.

#### Diretório Components
É um diretório com diversos arquivos .JSX que armazena os componentes que são exibidos nas telas como o Button.jsx, Card.jsx, Footer.jsx, InputText.jsx e Navbar.jsx

