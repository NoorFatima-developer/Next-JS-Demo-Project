"use client";
import { useState } from "react";

export const Counter = () => {
    console.log("Counter component");
    const [count, setCount] = useState(0);   //client component..

    return (
        <button onClick={()=>setCount(count + 1)}>Clicked {count} times</button>
    );
    
};