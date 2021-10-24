## Estrutura de uma aplicação NextJs

As rotas da aplicação ficam todas dentro da pasta "/src/pages", esta pasta não pode ser renomeada e ela só pode está em dois lugares: na raiz do projeto ou dentro de uma pasta chamada "src". Dentro dela, o arquivo que tiver o nome "index" será a rota inicial da aplicação.

Também é possível notar que, dentro desta pasta, existe os arquivos _app.tsx e _document.tsx, o _document.tsx não é criado por padrão pelo template do Create Next-app, porem é de suma importância. 

O NextJs, por padrão, já vem com um sistema de "roteamento", ou seja, as rotas das aplicação já são construídas automaticamente ao criar arquivos dentro da pasta "pages", portanto, caso o desenvolvedor queira criar algo que irá repetir em várias páginas da aplicação ou criar um contexto global, ele terá que utilizar o arquivo _app.tsx, que fica "em volta" de toda aplicação, se comporta de uma forma bem semelhante ao app.tsx no CRA. Quando uma página é acessada no NextJs, ele acessa os páginas e os componentes por dentro do _App.tsx, esse arquivo é recarregado toda vez que usuário troca de página, ou quando um estado é modificado.

Já o arquivo _document.tsx, só é carregado uma vez, que é quando o usuário acessa a aplicação, esse arquivo se comporta da mesma forma que o index.html que fica dentro da pasta "public" no CRA.
