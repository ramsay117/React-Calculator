import { useReducer } from 'react';
import './App.css';
import Digit from './components/Digit';
import Operator from './components/Operator';
import handleEvaluate from './utils/handleEvaluate';

function reducer(state, { type, payload }) {
  switch (type) {
    case 'OPERATOR': // attach operator
      if (state.preview == '' && state.result == '') return state;
      if (state.preview == '' && state.result != '') return { // otherwise extra space string before first preview
        ...state,
        preview: state.result + ' ' + payload.operator,
        result: ''
      }
      if (state.result == '') return { // 2 operators together
        ...state,
        preview: state.preview.slice(0, -1) + payload.operator,
      }
      return {
        ...state,
        preview: state.preview + ' ' + state.result + ' ' + payload.operator,
        result: ''
      }
    case 'EQUAL':
      return {
        ...state,
        preview: '',
        result: payload.result,
        overwrite: true
      }
    case 'CLEAR':
      return {
        ...state,
        preview: '',
        result: ''
      }
    case 'DELETE':
      return {
        ...state,
        result: state.result.slice(0, -1)
      }
    case 'DIGIT': // attach digit
      if (state.result === '0' || state.overwrite) { 
        return {
          ...state,
          result: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === '.' && state.result.includes('.')) return state
      return {
        ...state,
        result: state.result + payload.digit
      }
    default:
      return state
  }
}

function App() {

  const initState = {
    preview: '',
    result: '',
    overwrite: false
  }
  const [{ preview, result }, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">{preview}</div>
          <div className="result">{result}</div>
        </div>
        <button className="span-two" onClick={() => dispatch({ type: 'CLEAR' })}>AC</button>
        <button onClick={() => dispatch({ type: 'DELETE' })}>DEL</button>
        <Operator optor="÷" dispatch={dispatch} />
        <Digit digit="1" dispatch={dispatch} />
        <Digit digit="2" dispatch={dispatch} />
        <Digit digit="3" dispatch={dispatch} />
        <Operator optor="x" dispatch={dispatch} />
        <Digit digit="4" dispatch={dispatch} />
        <Digit digit="5" dispatch={dispatch} />
        <Digit digit="6" dispatch={dispatch} />
        <Operator optor="+" dispatch={dispatch} />
        <Digit digit="7" dispatch={dispatch} />
        <Digit digit="8" dispatch={dispatch} />
        <Digit digit="9" dispatch={dispatch} />
        <Operator optor="-" dispatch={dispatch} />
        <Digit digit="." dispatch={dispatch} />
        <Digit digit="0" dispatch={dispatch} />
        <button className="span-two" onClick={() => dispatch({ type: 'EQUAL', payload: { result: handleEvaluate(preview, result) } })}>=</button>
      </div>
    </>
  );
}

export default App;
