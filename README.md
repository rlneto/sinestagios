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

## CSS

_O CSS está presente em dois módulos, o Shared.modules.css e o relativo ao componente (por exemplo HomeLayout.modules.css), presentes na pasta src/styles/_

_Os módulos são carregados no css e cada propriedade possui uma classe própria, as classes são chamadas individualmente com a propriedade className no JSX correspondente_

## Single Page Application (SPA)
O frontend é uma Single Page Application (SPA) desenvolvida com o uso de React. A estrutura básica consiste em três componentes principais:

Navbar
O componente Navbar representa a barra de navegação superior. Ele contém links e elementos de navegação importantes para a aplicação.

Outlet
O componente Outlet é onde os diferentes componentes são renderizados dinamicamente, dependendo da rota atual. Ele funciona como o ponto de entrada principal para os diversos conteúdos exibidos na aplicação.

Footer
O componente Footer representa o rodapé da página. Ele contém informações adicionais e links úteis.

Context API para Compartilhamento de Estado do Usuário
Para gerenciar o estado do usuário em toda a aplicação, foi utilizada a Context API do React. Essa API permite compartilhar o estado do usuário com todos os componentes da aplicação sem a necessidade de passar props manualmente entre componentes aninhados.
