import { useState } from "react";
export default function Form({fun,setFun}){

    function formSubmit(e){
      e.preventDefault();
      let obj={
        id:(fun.length>0?(fun[fun.length-1].id)+1:1),
        description:inp,
        quantity:sel,
        packed:false
      }
      if(inp){
      setFun((fun)=>[...fun,obj])
      }
      setInp("");
      setSel(1);
      
    }
  
    const [sel,setSel]=useState(1);
    const [inp,setInp]=useState("");
    return (
      <div className='bg-green-700 flex h-[60px] items-center justify-evenly'>
        <p className="text-lg font-bold font-serif">THINGS YOU NEED FOR THE TRIP</p>
        <form onSubmit={formSubmit} className="flex gap-2">
          <select className="rounded-lg" value={sel} onChange={(e)=>{(setSel(e.target.value))}}>
            {Array.from({length:20},(_,i)=>{
              return(<option value={i+1}>{i+1}</option>)
            })}
          </select>
          <input className="rounded-lg px-[10px]" type="text" placeholder="....." value={inp} onChange={(e)=>{
            setInp(e.target.value)
          }}/>
          <button className="bg-black rounded-lg text-white p-[2px] px-[10px]">ADD</button>
        </form>
      </div>      
    );
  
  }