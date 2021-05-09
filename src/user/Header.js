import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./header.css";
function Header() {
  const [login, setlogin] = useState(false)
  useEffect(()=>{
    const islogin=(JSON.parse(localStorage.getItem('login')));
    setlogin(islogin)
  },[])
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">InCovid</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav m-auto">
      <li class="nav-item active">
        <Link class="header-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="header-link" to={"/prevention"}>Prevention</Link>
      </li>
      <li class="nav-item">
        <Link class="header-link" to ={"/news"}>News</Link>
      </li>
      <li class="nav-item">
        
      <Link type="button" class="header-link mr-2" to ={"/dualform"}>Register for Hospital</Link>
      </li>
      <li class="nav-item mt-2">
        
      <Link class="header-btn" to={"/"} onClick={()=>{
        setlogin(false)
        localStorage.setItem('login',JSON.stringify(false))
        }}>Logout<span class="sr-only">(current)</span></Link>
    
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Header
