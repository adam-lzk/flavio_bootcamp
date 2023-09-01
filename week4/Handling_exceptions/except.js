const test = (param) => {
    if (typeof param !== 'number') {
      throw 'The param should be a number!'
    }
    console.log('Success!')
  }

  try {
      test('1')
  } catch (err) {
      console.error(err)
  }
