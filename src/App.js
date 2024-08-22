import {useState} from 'react';
import Logo from './Logo';
import Form from './Form';
import List from './List';
import Footer from './Footer';





function App() {

  const [arr,setArr]=useState([]);
  // const [check,setCheck]=useState(false);
 return(
  <div className='app'>
    <Logo />
    <Form fun={arr} setFun={setArr}/>
    <List fun={arr} setFun={setArr}/>
    <Footer fun={arr}/>
  </div>
 );
}

export default App;
