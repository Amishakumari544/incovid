import React from 'react'
import {Link} from 'react-router-dom'
import "./header.css";
function Header() {
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
        <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/prevention"}>Prevention</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to ={"/news"}>News</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Header
