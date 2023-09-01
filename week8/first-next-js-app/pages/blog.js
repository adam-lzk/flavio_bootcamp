// the /blog URL depends on just the file name, and its position under the pages folder

import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <p>back to <Link href="../">Home page</Link></p>
    </div>
  )
}
