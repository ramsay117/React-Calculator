function Digit({ digit, dispatch }) {
  return (
    <button className='digit' onClick={(e) => {
      dispatch({ type: 'DIGIT', payload: { digit } })
      e.target.blur();
    }}>
      {digit}
    </button>
  )
}

export default Digit;