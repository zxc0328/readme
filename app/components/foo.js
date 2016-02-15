import React from 'react'

const Foo = (props) => {
  return <div>
          <h1>{ props.value }</h1>
          <button onClick={ props.onIncrement }>+100</button>
          <button onClick={ props.onDecrement }>-100</button>
         </div>
}

export default Foo
