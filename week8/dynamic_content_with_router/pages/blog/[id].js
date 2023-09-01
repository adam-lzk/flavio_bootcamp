import { useRouter } from 'next/router'
import posts from 'posts.json'  // we didn’t have to specify a relative URL, like ../../posts.json when loading the file. This is thanks to the default Next.js configuration that allows absolute imports

export default function BlogPost() {
  const router = useRouter()

  const post = posts[router.query.id]  // to get the dynamic part of the URL in the [id].js file

  if (!post) return <p>there is no {'"'+router.query.id+'"'} post{' :('}</p>  // here is the reason of adding this line - https://nextjs.org/docs/routing/dynamic-routes

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Post id: {router.query.id}</p>
      <p>JSON of the post: {JSON.stringify(post)}</p>
      <p>JSON of the router object: {JSON.stringify(router)}</p>
    </>
  )
}
