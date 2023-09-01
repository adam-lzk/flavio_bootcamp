// run: node index.js

import fs from 'fs'

fs.rename('file.txt', 'newname.txt', (err) => {
  if (err) {
    //oops there's been an error renaming!
    console.error(err)
    return
  }

  //the file has been renamed!
})

// undo: mv newname.txt file.txt
