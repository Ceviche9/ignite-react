import { render, screen } from "@testing-library/react"
import PostPreview, { getStaticProps } from '../../pages/posts/preview/[slug]';
import {mocked} from "jest-mock"
import { getPrismicClient } from "../../services/prismic"
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const posts = {
    slug: 'my-new-post',
    title: 'My New Post',
    content: 'post excerpt',
    updatedAt: '29 de Janeiro'
}

jest.mock('../../services/prismic.ts')
jest.mock('next-auth/client')
jest.mock('next/router')

describe('Posts page', () => {
  it('should renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<PostPreview post={posts} />)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
    expect(screen.getByText('post excerpt')).toBeInTheDocument()
    expect(screen.getByText('Wanna continue reading ?')).toBeInTheDocument()
  })

  it('should redirects user to full post when user is authenticated', async () => {
    const useSessionMocked = mocked(useSession)
    const useRouterMocked = mocked(useRouter)
    const pushMock = jest.fn()

    useSessionMocked.mockReturnValueOnce([
      {activeSubscription: 'fake-active-subscription'},
      false
    ]as any)

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    }as any)

    render(<PostPreview post={posts} />)

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post')
  })

  it('should loads initial data if user has subscription', async () => {
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title:  [
            {type: 'heading', text: 'My New Post'}
          ],
          content:  [
            {type: 'paragraph', text: 'post content'}
          ],
        },
        last_publication_date: '01-29-2022'
      })
    }as any)

    const response = await getStaticProps({params: {slug: 'my-new-post'}})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My New Post',
            content: 'post content',
            updatedAt: '29 de janeiro de 2022'
          }
        }
      })
    )
  })
})