// http://localhost:3000/api/comments

import comments from 'comments.json'

export default function handler(req, res) {
  res.status(200).json(comments)
}
