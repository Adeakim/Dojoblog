import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (  
       <nav className="navbar">
           <h1>The Dojo Blog</h1>
           <div className="links">
               <Link to ="/">home</Link>
               <Link to="/create">New Blog</Link>
               
           </div>
       </nav> 
    );
}
 
export default NavBar;