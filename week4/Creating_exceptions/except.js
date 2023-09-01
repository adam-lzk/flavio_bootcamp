const test = (param) => {
  if (typeof param !== 'number') {
    throw 'The param should be a number!'
  }

  console.log('Success!')
}

test(1)
test('1')
test(1)
