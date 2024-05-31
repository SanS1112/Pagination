import { useState, useEffect, useRef, createContext} from 'react'

import './App.css'
let themecontext= createContext();

function App() {
  const [count, setCount] = useState();
  const[th, setTh]= useState(false);
  const n = useRef();
  const data= useRef();
  
function scroll(e){
  document.getElementById("foo").scrollBy(30, 0);
  }
function scrolll(e) {
  document.getElementById("foo").scrollBy(-30, 0);
}

function changetheme(){setTh(th=>!th)};

  function Click(e){
 n.current = e.target.innerHTML;
 
const arr= data.current.slice(n.current*10-10,n.current*10);
setCount(arr);
  }

useEffect(()=>{async function fet() {const response= await fetch("https://jsonplaceholder.typicode.com/posts");
data.current = await response.json();setCount(data.current.slice(0,10))} fet(); } , [])

  return (
    <themecontext.Provider value={th}>
      <div className={!th ? "body1" : "body2"}>
        <div className="head">
          <h2>Welcome to Pagination Project
          <span id="theme" onClick={changetheme}>
            Change Theme
          </span></h2>
        </div>
        <div className="body">
          <h3>Select your Favourite Item</h3>
          {data.current
            ? count.map((e) => (
                <p key={e.id} className="el">
                  {e.title}
                </p>
              ))
            : null}
        </div>

        <button className="btn1" onClick={scrolll}>
        &lt;
        </button>
        <div className="footer" id="foo">
          <div className={n.current == 1 ? "active" : "f1"} onClick={Click}>
            1
          </div>
          <div className={n.current == 2 ? "active" : "f1"} onClick={Click}>
            2
          </div>
          <div className={n.current == 3 ? "active" : "f1"} onClick={Click}>
            3
          </div>
          <div className={n.current == 4 ? "active" : "f1"} onClick={Click}>
            4
          </div>

          <div className={n.current == 5 ? "active" : "f1"} onClick={Click}>
            5
          </div>
          <div className={n.current == 6 ? "active" : "f1"} onClick={Click}>
            6
          </div>
          <div className={n.current == 7 ? "active" : "f1"} onClick={Click}>
            7
          </div>
          <div className={n.current == 8 ? "active" : "f1"} onClick={Click}>
            8
          </div>
          <div className={n.current == 9 ? "active" : "f1"} onClick={Click}>
            9
          </div>
        </div>
        <button className="btn2" onClick={scroll}>
          &gt;
        </button>
      </div>
    </themecontext.Provider>
  );
}

export default App
