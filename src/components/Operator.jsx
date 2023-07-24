function Operator({ optor, dispatch }) {
  return (
    <button className='operator' onClick={() => dispatch({ type: 'OPERATOR', payload: { operator: optor } })}>
      {optor}
    </button>
  )
}

export default Operator;