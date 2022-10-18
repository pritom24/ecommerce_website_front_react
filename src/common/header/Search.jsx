import React from "react";

import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Search = ({ CartItem }) => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              {/* <img src={logo} alt="" /> */}
              <h1>primex</h1>
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width"> 
          <li> {isAuthenticated && <p>{user.name}</p> }</li>
         
          <Link>
              <i
                onClick={() => loginWithRedirect()}
                className="fa fa-user icon-circle"
              ></i>
         
            </Link>

            <Link>
              <i
                className="fa fa-sign-out icon-circle userlogout"
                onClick={() => logout({ returnTo: window.location.origin })}
              ></i>
            </Link>

           

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
