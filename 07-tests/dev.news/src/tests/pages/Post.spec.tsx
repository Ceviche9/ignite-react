import { render, screen } from "@testing-library/react"
import {mocked} from "jest-mock"
import Post, { getServerSideProps } from "../../pages/posts/[slug]";
import { getSession } from 'next-auth/client';

const post = {
    slug: 'my-new-post',
    title: 'My New Post',
    content: '<p>post content</p>',
    updatedAt: '29 de janeiro'
}
jest.mock('next-auth/client')
jest.mock('../../services/prismic.ts')

describe('Home page', () => {
  it('should renders correctly', () => {
    render(<Post post={post}/>)

    expect(screen.getByText('My New Post')).toBeInTheDocument()
    expect(screen.getByText('post content')).toBeInTheDocument()
  })

  it('should redirects user if no subscription was found', async () => {
    const getSessionMocked = mocked(getSession)

    getSessionMocked.mockResolvedValueOnce(null)

    const response = await getServerSideProps({
      params: {slug: 'my-new-post'}
    } as any)

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        })
      })
    )

  })
})