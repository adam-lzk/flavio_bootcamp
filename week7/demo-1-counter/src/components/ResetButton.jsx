function ResetButton({ reset }) {
  return (
    <button onClick={ () => { reset() } }>
      reset
    </button>
  )
}

export default ResetButton
