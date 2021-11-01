import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'

import Head from 'next/head'
import styles from './posts.module.scss'

import { PostProps } from '../../protocols/postProtocols'

export default function Posts({posts}: PostProps) {
  return (
    <>
      <Head>
        <title>Post | Dev.news</title>
      </Head>

      <main className={styles.container} >
        <div className={styles.posts}>
          {posts.map((post) => (
            <a 
              key={post.slog}
              href="#"
              >
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>

    </>
  )
}

// Para buscar os posts via StaticProps
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  // Buscando os posts no prismic
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    // Escolhendo os dados para buscar.
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  // Formatando os posts
  const posts = response.results.map(post => {
    return {
      slog: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })

    }
  })

  return {
    props: {posts}
  }
}