function Button({ sign, step, increment }) {
  return (
    <button onClick={ () => { increment(sign, step) } }>
      {sign}{step}
    </button>
  )
}

export default Button
