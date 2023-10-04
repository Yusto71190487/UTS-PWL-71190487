import React from 'react'
import NavbarDashboard from './NavbarDashboard';
import Update from './Update';
import "../style/Style.css";
import pictures from "../assets/images/lg.png";

const UpdatePage = () => {
  return (
    <div className="MyRg">
      <NavbarDashboard image={pictures}/>
       <Update />
    </div>
  )
}

export default UpdatePage;