import { useState } from 'react'
import cross from './assets/delete-button.png'
import cir from './assets/circle (1).png'
import './App.css'
import{useRef}from'react'
let data=["","","","","","","","",""];
function App() {
  const[count,setCount]=useState(0);
  const [lock,setLock]=useState(false);
  const[lo,setLo]=useState(false);
  const[playerx,setPlayerx]=useState(true);
  const[playero,setPlayero]=useState(false);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  let box9=useRef(null);
  let boxarr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];
  const click=(e,num)=>{
    if(lock)
    {
    return 0;
    }
  else if(count%2==0)
  {
    e.target.innerHTML=`<img src=${cross}></img>`;
    setPlayerx(false);
    setPlayero(true);
    setCount(count+1);
    data[num]="x";
  }
  else
  {
  e.target.innerHTML=`<img src=${cir}></img>`;
  setPlayero(false);
  setPlayerx(true);
  setCount(count+1);
  data[num]="o";
  }
  check();
  }
  const check=()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=="")
    won(data[2]);
   else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=="")
    won(data[5]);
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=="")
    won(data[8]);
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=="")
    won(data[6]);
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=="")
    won(data[7]);
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=="")
    won(data[8]);
  else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=="")
    won(data[8]);
    else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=="")
    won(data[6]);
  }
  const won=(winner)=>{
  setLock(true);
  if(winner==="x")
  setLo(true);
  }
  const res=()=>{
    setCount(0);
    setLock(false);
    setLo(false);
    setPlayerx(true);
    setPlayero(false);
    data = ["", "", "", "", "", "", "", "", ""];
  boxarr.map((e)=>{
    e.current.innerHTML="";
  });
  }
  return (
    <>
    <div className="cont">
      {(lock)?<h1 id="ge">Congratulations {(lo)?<img src={cross}></img>:<img src={cir}></img>} won the game</h1>:<div><h1 id="re">Tic Tac Toe Game</h1><h2>Player<div className={playerx?'xee':'xe'}>X</div><div className={playero?'oee':'oe'}>O</div>Turn</h2></div>}

      <div className="row1">
        <div className="boxe"  ref={box1} onClick={(e)=>click(e,0)}></div>
        <div className="boxe" ref={box2}  onClick={(e)=>click(e,1)}></div>
        <div className="boxe" ref={box3}  onClick={(e)=>click(e,2)}></div>
      </div>
      <div className="row2">
      <div className="boxe"  ref={box4}  onClick={(e)=>click(e,3)}></div>
      <div className="boxe" ref={box5}  onClick={(e)=>click(e,4)}></div>
      <div className="boxe"  ref={box6} onClick={(e)=>click(e,5)}></div>
      </div>
      <div className="row3">
      <div className="boxe"  ref={box7} onClick={(e)=>click(e,6)}></div>
      <div className="boxe"  ref={box8} onClick={(e)=>click(e,7)}></div>
      <div className="boxe"  ref={box9} onClick={(e)=>click(e,8)}></div>
      </div>
      <button onClick={()=>{res()}} className='rr'>Reset</button>
    </div>
    </>
  )
}

export default App
   
  
