import React from 'react'
import './NavBar.css';

function navBar() {
  return (
    <div className='navbar'>
      <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0PZvM1sOo9aUu1ksimhPWao7hFtXXFqoUw&usqp=CAU" alt="Netflix-logo" />
    <img className='avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjfMoE5cBc3fzcWbnx75wBOUN94kocbAfDg&usqp=CAU" alt="Avatar" />
    </div>
  )
}

export default navBar;
