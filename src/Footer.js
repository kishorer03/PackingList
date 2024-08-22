export default function Footer({fun}){
    let pack=fun.reduce((a,b)=>{
      if(b.packed) {
        return a+1
      }
      return a;
    },0)
    if(fun.length===0){
      return (
        <div className='bg-blue-950 h-[45px] text-lg italic justify-center font-bold text-white flex items-center'>
        Add the items that you would like to remember
      </div>
      )
    }else{ 
    return (
      <div className='bg-blue-950 h-[45px] text-lg italic justify-center font-bold text-white flex items-center'>
        {fun.length!==pack?<p>You added {fun.length} items, of which {pack} is packed</p>:<p>You packed all the items</p>}
      </div>
    );
  }
  }