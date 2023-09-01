// if you see the image change it’s not a problem of your code - it’s how things work
// and it only happens in development mode. but you can turn off this behavior by disabling strict mode. more - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode

// client-side data fetching

import { useState, useEffect } from 'react'

export default function DogImage() {
  const [image, setImage] = useState(null)

  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
      const data = await res.json()
      setImage(data.message)
    }
    getData()
  }, [])

  return (
    <img src={image} />
  )
}




// the same thing but with server-side data fetching
/*
export default function DogImage({ image }) {
  return (
    <img src={image} />
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
  const data = await res.json()
  return {
    props: {
      image: data.message
    }
  }
}
*/
