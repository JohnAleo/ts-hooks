import React, { useEffect, useRef, useState } from 'react'

const UseRefComponent = () => {
//Count qiladigan function
const [count, setCount]= useState(0);
const prevCountRef=useRef();
useEffect(()=> {
    prevCountRef.current=count;
}, [count]);
const prevCount=prevCountRef.current


///////////
    // const countRef=useState(0)
    // const [data, setData]=useState();
    // const inputRef= useRef(null);
// focus ushlaydigan input
    // useEffect(() =>{
    //     inputRef.current.focus();
    // }, [])


    // Timer 
    // useEffect(()=> {
    //     const interval = setInterval(() => {
    //         countRef.current += 1;
    //         console.log(countRef.current);
    //     }, 1000);
    //     // setData(interval)
    //     return ()=> clearInterval(interval);
    // })
  return (
    <div style={{display:'flex' }}>
        {/* <input type="text" />
        <input type="text" ref={inputRef} /> */}
        <div style={{display:'flex',flexDirection:'column'}}>
            <p>Hozirgi qiymat {count}</p>
            <p>Oldingi qiymat {prevCount}</p>
            <button onClick={()=>setCount(count+1)}>Count Increament</button>
        </div>
    </div>
  )
}

export default UseRefComponent