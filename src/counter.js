import * as React from 'react';
import {useMappedState,useDispatch} from 'redux-react-hook';

export default function Counter(props) {

  const counter = useMappedState(state=> state.count);
  const dispatch = useDispatch();

  const [count,setCount] = React.useState(1)
  return (
    <div>
      <h1>
        hi {props.name}
        {counter} times from props
      </h1>

      <h1>
        hi {props.name}
        {count} times from state
      </h1>

      <div>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
      </div>

      <div>
        <button onClick={()=>setCount(count+1)}>Increment state</button>
        <button onClick={()=>setCount(count-1)}>Decrement state</button>
      </div>

    </div>
  );
}

