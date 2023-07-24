function Digit({ digit, dispatch }) {
  return (
    <button className='digit' onClick={() => dispatch({ type: 'DIGIT', payload: { digit } })}>
      { digit }
    </button>
  )
}

export default Digit;