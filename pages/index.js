import Page from '@components/page'
import Link from '@components/link'

import getPosts from '@lib/get-posts'
import PostsList from '@components/posts-list'

const About = ({ posts }) => {
  console.table(posts)
  return (
    <Page description="Hi, I'm Yesh. A Product Designer based in Banglore">
      <article>
        <h1>Yesh Chala</h1>

        <p>
          Frontend developer and designer,{' '}
          <Link underline href="/keyboards">
            mechanical keyboard
          </Link>{' '}
          enthusiast, practicing minimalist, and{' '}
          <Link underline href="/music">
            trance lover
          </Link>{' '}
          in search of flow.{' '}
          <Link underline href="/blog">
            Writing
          </Link>{' '}
          about the insights from design.
        </p>

        <p>
          Working with{' '}
          <Link underline href="https://vercel.com" external>
            ▲ Vercel
          </Link>{' '}
          to build better ways to deploy websites.
        </p>

        <h1>Recent Posts</h1>

        <ul>
          <PostsList posts={posts} />
        </ul>

      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default About
