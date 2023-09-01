function RememberResultButton({ rememberResult }) {
  return (
    <button onClick={ () => { rememberResult() } }>
      remember result of calculation
    </button>
  )
}

export default RememberResultButton
