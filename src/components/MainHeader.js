import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from './MainHeader.module.css';

// activeClassName on NavLink shows which page you're on 

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={classes.active}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

// const MainHeader = () => {
//   return (
//     <header className={classes.header}>
//       <nav className={classes['header nav']}>
//         <ul className={classes['header ul']}>
//           <li className={classes['header li']}>
//             <Link to="/welcome">Welcome</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link> 
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// };

// looks like we switched pages but doesn't re-render


// const MainHeader = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/welcome">Welcome</a>
//           </li>
//           <li>
//             <a href="/products">Products</a> 
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// };

// // this sends a new request every time link is clicked
// // loses any app state when it refreshes/nav between pages 

export default MainHeader;

