
import { useReducer } from 'react'
type StateProps={
  count:number;
}
type ActionProps={
  payload:number;
  type:"increment" | "decrement" | "refresh";
}

const InitialState={count:0}
function reducer (state:StateProps, action:ActionProps){
  switch(action.type){
    case "increment":
      return{ count:state.count + action.payload}
    case "decrement":
      return{count:state.count - action.payload}
    case "decrement":
      return{count:state.count - action.payload}
    case "increment":
      return{count:state.count + action.payload}
    default :
      return state;
    case "refresh":
      return {count:0}
  }
}

const Counting = () => {
    const [state , dispatch] = useReducer(reducer,InitialState);
  return (
    <div>
      <p>{state.count}</p>
        <button onClick={()=>{
          dispatch({type:"increment", payload:1})
        }}>Increment</button>
        <button onClick={()=>{
          dispatch({type:"decrement", payload:1})
        }}>Decrement</button>
        <button onClick={()=>{
          dispatch({type:"increment", payload:10})
        }}>Increment10</button>
        <button onClick={()=>{
          dispatch({type:"decrement", payload:10})
        }}>Decrement10</button>
        <button onClick={()=>{
          dispatch({type:"refresh",payload:0})
        }}>refresh</button>
    </div>
  )
}

export default Counting;