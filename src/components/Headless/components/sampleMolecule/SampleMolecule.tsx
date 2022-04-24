import React, { forwardRef, useState, useReducer } from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
}

function reducer(state: any, action: any): any {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
   
        case 'decrement':
            return { ...state, count: state.count - 1 }
  
        default:
            break;
    }
}


let SampleMolecule = forwardRef((props: any, ref: any) => {


    const [data, setData] = useState('')
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div ref={ref}>

            <div style={{ margin: 20 }}>Simple Reducer Pattern</div>

            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <span style={{ padding: 10 }}>{state?.count}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>

        </div>
    )
})

export default Object.assign(SampleMolecule)