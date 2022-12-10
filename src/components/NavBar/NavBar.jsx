import React from 'react';
import CartWidget from '../CartWideget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className = "conteiner">
        <nav className='nav'>
            <div className='nav_brand'>
                <NavLink className='nav_link' > Mi E-commerce</NavLink>
            </div>
            <ul className='nav_list'>
                <li>
                    <NavLink className='nav_link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link' to='/categoria/computadoras' >Computadoras</NavLink>
                </li>
                <li>
                    <NavLink className='nav_link'  to='/categoria/electrodomesticos'>Electrodomesticos</NavLink>
                </li>
                
                <li>
                    <NavLink className='nav_link' to='cart'><CartWidget/>
                    </NavLink>
                </li>
            </ul>      
        </nav>
    </div>

    );

}

export default NavBar;
 