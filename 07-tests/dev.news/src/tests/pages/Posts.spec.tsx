import { render, screen } from "@testing-library/react"
import {mocked} from "jest-mock"
import Posts, { getStaticProps } from '../../pages/posts/index';
import { getPrismicClient } from "../../services/prismic"

const posts = [
  {
    slug: 'my-new-post',
    title: 'My New Post',
    excerpt: 'post excerpt',
    updatedAt: '29 de Janeiro'
  }
]

jest.mock('../../services/prismic.ts')

describe('Posts page', () => {
  it('should renders correctly', () => {
    render(<Posts posts={posts} />)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
  })

  it('should loads initial data and Posts list', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-post',
            data: {
              title: [
                {type: 'heading', text: 'My New Post'}
              ],
              content: [
                {type: 'paragraph', text: 'post excerpt'}
              ]
            },
            last_publication_date: '01-29-2022',
          }
        ]
      })
    }as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: 'my-new-post',
              title: 'My New Post',
              excerpt: 'post excerpt...',
              updatedAt: '29 de janeiro de 2022'
            }
          ]
        }
      })
    )

  })
})