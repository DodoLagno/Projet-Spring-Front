import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassName="active" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/films" activeclassName="active">
                        Films
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/genres" activeclassName="active">
                        Genres
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/acteurs" activeclassName="active">
                        Acteurs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/rechercheavancee" activeclassName="active">
                        Recherche Avancée
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/realisateurs" activeclassName="active">
                        Réalisateurs
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;