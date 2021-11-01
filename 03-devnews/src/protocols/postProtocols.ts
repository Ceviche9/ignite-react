
type Post = {
  slog: string
  title: string
  excerpt: string
  updatedAt: string
}

export type PostProps = {
  posts: Post[]
}