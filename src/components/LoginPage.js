import React from 'react'
import NavbarNav from './NavbarNav';
import Login from './Login';
import "../style/Style.css";
import pictures from "../assets/images/lg.png";
import pictures2 from "../assets/images/person.png"

const LoginPage = () => {
  return (
    <div className="MyBg">
      <NavbarNav image={pictures}/>
       <Login image={pictures2} />
    </div>
  )
}

export default LoginPage;