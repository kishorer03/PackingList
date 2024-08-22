import { useState } from "react";
export default function List({fun,setFun}){
    const [ord,setOrd]=useState("add-order");
    function deleteArr(id){
      setFun((fun)=>fun.filter((e)=>e.id!==id))
    }
  
    function handleToggle(id){
      setFun((fun)=>fun.map((e)=>e.id===id?{...e,packed:!e.packed}:e));
    }
    let dum_arr;
  
    if(ord==='add-order') dum_arr=fun;
    else if(ord==='ascending'){
      dum_arr=fun.slice().sort((a,b)=>a.description.localeCompare(b.description))
    }
    else{
      dum_arr=fun.slice().sort((a,b)=>Number(b.packed)-Number(a.packed))
    }
    return (
      <div className='bg-gray-600 min-h-[490px] relative'>
        <ul className="grid grid-cols-4 gap-[40px] p-[80px] pl-[160px]">
            {dum_arr.map((e)=>{
              return(<li className="flex gap-1" key={e.id} style={e.packed?{textDecoration:"line-through"}:{}}>
              <input type="checkbox" value={e.packed} onChange={()=>handleToggle(e.id)}></input>
              <p className="text-lg">{`${e.quantity} - ${e.description}`}</p>
              <button className="ml-[4px]" style={{color:"red",textDecoration: "none" }} onClick={()=>{
                deleteArr(e.id)}}>X</button>
              </li>)
            })}
        </ul>
        <div className='flex absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-2'>
        <select className="rounded-md" value={ord} onChange={(e)=>{setOrd((ord)=>e.target.value)}}>
          <option value="add-order">Sort by order</option>
          <option value="ascending">Sort by alphabet</option>
          <option value="done">Sort by completed</option>
        </select>
        <button onClick={()=>{
          const confirmed=window.confirm("Are you sure??")
          if(confirmed) setFun([])}}>Clear</button>
      </div>
      </div>
  
  
    );
  }