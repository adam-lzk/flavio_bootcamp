import posts from 'posts.json'

export default function BlogPost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export async function getStaticPaths() {  // this function defines the dynamic URLs that the page allows. it exports the ids of the posts we defined in the JSON file
  return {
    paths: Object.keys(posts).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {  // this function is called for every one of those paths array you returned from getStaticPaths
  return {
    props: {
      post: posts[params.id],
    },
  }
}
