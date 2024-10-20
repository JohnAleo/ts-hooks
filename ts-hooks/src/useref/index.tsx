import React, { useEffect, useRef, useState } from 'react'

const UseRefTsx = () => {
const [timer, setTimer]=useState(0);
const interValRef = useRef<number| undefined>(undefined);

const stopTimer= ()=>{
    window.clearInterval(interValRef.current);
}
useEffect(()=> {
    interValRef.current=window.setInterval(()=>{
        setTimer((timer)=> timer+1);
    }, 1000);
    return()=>{
        stopTimer();
    }
})
    ////Ts da focus ushlaydigan
// const inputRef= useRef<HTMLInputElement>(null!);
// useEffect(()=>{
//     inputRef.current.focus();
// })
  return (
    <div>
        {/* <input type="text" ref={inputRef} /> */}
         <p>Timer {timer}</p>
         <button onClick={()=> stopTimer()}>Stop Timer</button>
         <button>Play</button>
    </div>
  )
}

export default UseRefTsx