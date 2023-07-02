import React from 'react';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <div className='Navigationbar'>
        <a className='Navigationbarchild' style={{fontSize:30, textDecoration:'none'}} href='./c'>About  us</a>
        <h1 className='Navigationbarchild' style={{fontSize:50}}> الاخوين</h1>
        <a className='Navigationbarchild' style={{fontSize:30, textDecoration:'none'}} href='./c'>Contact us</a>
    </div>
  );
}

export default Navbar;