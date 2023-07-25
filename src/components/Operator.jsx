function Operator({ optor, dispatch }) {
  return (
    <button className='operator' onClick={(e) => { 
      dispatch({ type: 'OPERATOR', payload: { operator: optor } })
      e.target.blur()
      }}>
      {optor}
    </button>
  )
}

export default Operator;