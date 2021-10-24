## Estrutura de uma aplicação NextJs

As rotas da aplicação ficam todas dentro da pasta "/src/pages", esta pasta não pode ser renomeada e ela só pode está em dois lugares: na raiz do projeto ou dentro de uma pasta chamada "src". Dentro dela, o arquivo que tiver o nome "index" será a rota inicial da aplicação.

Também é possível notar que, dentro desta pasta, existe os arquivos _app.tsx e _document.tsx, o _document.tsx não é criado por padrão pelo template do Create Next-app, porem é de suma importância. 

O NextJs, por padrão, já vem com um sistema de "roteamento", ou seja, as rotas das aplicação já são construídas automaticamente ao criar arquivos dentro da pasta "pages", portanto, caso o desenvolvedor queira criar algo que irá repetir em várias páginas da aplicação ou criar um contexto global, ele terá que utilizar o arquivo _app.tsx, que fica "em volta" de toda aplicação, se comporta de uma forma bem semelhante ao app.tsx no CRA. Quando uma página é acessada no NextJs, ele acessa os páginas e os componentes por dentro do _App.tsx, esse arquivo é recarregado toda vez que usuário troca de página, ou quando um estado é modificado.

Já o arquivo _document.tsx, só é carregado uma vez, que é quando o usuário acessa a aplicação, esse arquivo se comporta da mesma forma que o index.html que fica dentro da pasta "public" no CRA.

### _document.tsx

```ts
import Document , {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/> 
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}
```
### _app.tsx

```ts
import {AppProps} from 'next/app'

import '../../styles/global.scss'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
```
## Estilização das páginas e componentes

No NextJs a estilização é um pouco diferente, não é possível criar arquivos styles.css e importa-los dentro de cada componente ou página. Para que o escopo de de estilização de um componente ou página não afete outras estilizações ou a estilização global, é utilizado o Scoped Css por padrão no NextJs. Para criar um Css único para um arquivo, basta adiconar a palavra "module" no nome do arquivo. 

Ex: home.module.css

Porém para estilizar cada componente ou tag HTML de um arquivo, é necessário utilizar classes ou Id's.

### home.module.scss

```scss
.contentContauner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero {
  max-width: 600px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;

    margin-top: 2.5rem;

    span {
      color: var(--cyan-500)
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin-top: 1.5rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  button {
    margin-top: 1.5rem;
  }

}
```

### index.tsx (Sem os comentários e sem as configurações do SSG)

```tsx
import {GetStaticProps} from 'next'
import Head from 'next/head'
import {SubscribeButton} from '../components/SubscribeButton'
import { HomeProps } from '../protocols/homeProtocols'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Dev.News</title>
      </Head>
      <main className={styles.contentContauner} >
        <section className={styles.hero} >
          <span>🤟  hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}
```
