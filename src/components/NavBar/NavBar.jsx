import React from 'react';
import CartWidget from '../CartWideget/CartWidget';

export const NavBar = () => {
    return (
        <div className = "conteiner">
        <nav className='nav'>
            <div className='nav_brand'>
                <a className='nav_link' href='#'> Mi E-commerce</a>
            </div>
            <ul className='nav_list'>
                <li>
                    <a className='nav_link' href="#">Home</a>
                </li>
                <li>
                    <a className='nav_link' href="#">PC</a>
                </li>
                <li>
                    <a className='nav_link' href="#">Laptops</a>
                </li>
                <li>
                    <a className='nav_link' href="#">Componentes</a>
                </li>
                <li>
                    <a className='nav_link' href="#">1<CartWidget/></a>
                </li>
            </ul>      
        </nav>
    </div>

    );

}

export default NavBar;
 