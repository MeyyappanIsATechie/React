import React, { useEffect, useMemo, useRef } from "react";

const Hooks = () => {
  const countValue = useRef(0);
  const divRef = useRef();
  const inputRef = useRef();

  const handleClick = () => {
    countValue.current++;
    console.log(countValue.current);

  };

  useEffect(()=>{
    const getDivRef = divRef.current;
    const getInputRef = inputRef.current;

    getInputRef.focus();

    getDivRef.style.color = "red";


    if(getDivRef){
      console.log(getDivRef.textContent);
    }
  },[]);
  // // useMemo hook to calculate factorial of countValue.current
  // const factorial = useMemo(() => {
  //   let result = 1;
  //   for (let i = 1; i <= countValue.current; i++) {
  //     result *= i;
  //   }
  //   return result;
  // }, [countValue.current]);
  // // useCallback hook to create a memoized version of handleClick
  // const memoizedHandleClick = useMemo(() => () => handleClick(), []);

  return (
    <div>
      <h1>useRef, useCallback, useMemo</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni
        fuga. Cupiditate odio nostrum animi? Id minus blanditiis excepturi quod,
        tempora sit doloribus eos quibusdam eveniet dignissimos tempore vero
        totam.
      </div>
      <input name="name" placeholder="enter name" ref={inputRef}/>
    </div>
  );
};

export default Hooks;
