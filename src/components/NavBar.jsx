import React from 'react'
import { Link } from "react-scroll";


const NavBar = () => {
  
  const links = [
    {id: 1, link: 'home'},
    {id: 2, link: 'about'},
    {id: 3, link: 'projects'},
    {id: 4, link: 'contact'}
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-blue-550 px-4">
        <div>
        </div>
        <ul className="font-main text-2xl hidden md:flex">
                {links.map(({id, link}) => (
            <li key={id} className="px-4 cursor-pointer hover:underline hover:scale-110 duration-200">
                <Link to={link} smooth duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
    </div>
  );
}

export default NavBar;