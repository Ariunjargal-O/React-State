'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
let [counter, setCounter] = useState(0)

  const add = () => {
    setCounter(counter + 1);
  }

  const sub = () => {
    if(counter == 0)      // --3 arga
      return false

    // if(counter > 0)
    // {setCounter(counter - 1)}  //--1 arga
    
    // if(counter <= 0) return;   //--2 arga
    // setCounter(counter - 1)

    setCounter(counter - 1)
    
  
    }

  
  return (
    <div className="container">
      <h1>{counter}</h1>
     <div className="btn-flex">
     <button className="btn" onClick={add}>Add</button>
     <button className="btn" onClick={sub}>Sub</button>
     </div>
    </div>
  );
}
