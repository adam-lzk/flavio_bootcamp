// http://localhost:3000/api/comments/* (test, apple, book, ...)

import comments from 'comments.json'

export default function handler(req, res) {
  res.status(200).json({ post: req.query.id, comments })  // the query is attached to the request object
  console.log(req.query.id)
  res.end()
}


// to make requests:

// export default function handler(req, res) {
//   switch (req.method) {
//     case 'GET':
//       console.log('get')
//       break
//     case 'POST':
//       console.log('post')
//       break
//     default:
//       res.status(405).end() //no other method is allowed, so we return a "405 Method Not Allowed" error
//       break
//   }
// }
