'use client'

import { useState } from "react";

export const CartCounter = () => {

    const [counter, setCounter] = useState(0);

    return (
      <>
        <span className="text-9xl">{counter}</span>
        <div className="flex">
          <button onClick={() => setCounter(counter +1)}>+1</button>
          <button onClick={() => setCounter(counter -1)}>-1</button>
        </div>
      </>
    )
}

