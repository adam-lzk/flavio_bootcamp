import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>look at the <Link href='/dog'>dogs</Link></h1>
    </div>
  )
}
