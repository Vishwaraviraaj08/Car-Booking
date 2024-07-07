import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function ProfileMenu({userName, openNav}) {

    const [open, setOpen] = useState(false);

    return <>
        <style>
            {
                `
                .profile-dropdown {
  display: inline-block;
  position: relative;
  background: #f2f2f2;
  margin: auto;
  font-weight: bold;
  font-size: 1.3rem;
  border-radius: 3px;
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Likely future */
}
.profile-dropdown * {
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Likely future */
}

.profile-dropdown input[type=checkbox]:checked ~ ul {
  display: block;
  animation: pulse 0.5s;
}
.profile-dropdown input[type=checkbox]:checked ~ img {
  background: green;
}
.profile-dropdown input[type=checkbox]:checked ~ label {
  background: green;
}
.profile-dropdown input[type=checkbox]:checked ~ label i {
  color: #f2f2f2;
}
.profile-dropdown input[type=checkbox]:checked ~ label:after {
  content: "";
  position: absolute;
  top: 100%;
  right: calc(50% - 10px);
  display: block;
  border-style: solid;
  border-width: 7px 10px 0 10px;
  border-color: orange transparent transparent transparent;
  width: 0;
  height: 0;
}
.profile-dropdown img {
  display: inline-block;
  background: #d9d9d9;
  height: 2.5rem;
  vertical-align: middle;
  margin-right: 1rem;
  margin: 0.5rem 0.75rem 0.5rem 0.5rem;
  border-radius: 50%;
}
.profile-dropdown span {
  display: inline-block;
  vertical-align: sub;
  width: 125px;
  margin-right: 2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.profile-dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  border-radius: 3px;
  z-index: 100000;
}
.profile-dropdown ul li a {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #737373;
  font-size: 1.5rem;
}
.profile-dropdown ul li a i {
  font-size: 1.3rem;
  vertical-align: middle;
  margin: 0 0.75rem 0 -0.25rem;
}
.profile-dropdown ul li a:hover {
  background: #e5e5e5;
}
.profile-dropdown ul li:first-child a:hover {
  border-radius: 3px 3px 0 0;
}
.profile-dropdown ul li:last-child a:hover {
  border-radius: 0 0 3px 3px;
}
.profile-dropdown > label {
  position: relative;
  height: 3.5rem;
  display: block;
  text-decoration: none;
  background: transparent;
  color: #333;
  box-sizing: border-box;
  padding: 0.9rem;
  float: right;
  border-radius: 0 3px 3px 0;
}
.profile-dropdown > label i {
  color: #b2b2b2;
  font-size: 1.75rem;
}
.profile-dropdown:after {
  content: "";
  display: table;
  clear: both;
}


.profile-container {
  width: 80%;
  margin: 4rem auto 2rem;
}
.profile-container .half {
  width: 50%;
  float: left;
  margin-bottom: 2rem;
}
.profile-container:after {
  content: "";
  display: table;
  clear: both;
}

p.subtitle {
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0 2rem;
  letter-spacing: 0.1rem;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.25;
  z-index: -1;
  background: url(https://ar1web-com.googlecode.com/svn/Bg/bg63.gif);
}
`
            }
        </style>
        <div className="">
            <div className="" onClick={() => {setOpen((curr) => {
                        return !curr;
            })}}>
                <label  className="profile-dropdown">
                    <img src="https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"/>
                    <span>Hello, {userName}</span>
                    {/*<label htmlFor="profile2"></label>*/}
                    {open && <ul>
                        <li><Link to={"/history"} onClick={openNav}>History</Link></li>
                        <li><a href="/login" onClick={openNav}>LogOut</a></li>
                    </ul>}
                </label>
            </div>
        </div>
    </>
}