// Importations des bibliothèques React et des composants nécessaires
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importation du composant Navbar pour la navigation
import Navbar from './components/Navbar';

// Importations des différentes pages de l'application
import Home from './pages/home/Home';
import Acteurs from './pages/acteurs/Acteurs';
import Films from './pages/films/Films';
import Genres from './pages/genres/Genres';
import RechercheAvancee from './pages/rechercheavancee/RechercheAvancee';
import Realisateurs from './pages/realisateurs/Realisateurs';

// Importation des styles globaux
import './styles/global.css';

// Composant principal de l'application
const App = () => {
    return (
        // Utilisation du composant Router pour gérer la navigation
        <Router>
            <div>
                {/* Composant Navbar pour la navigation entre les pages */}
                <Navbar />

                {/* Utilisation du composant Routes pour définir les différentes routes de l'application */}
                <Routes>
                    {/* Route pour la page d'accueil */}
                    <Route path="/" element={<Home />} />

                    {/* Route pour la page des acteurs */}
                    <Route path="/acteurs" element={<Acteurs />} />

                    {/* Route pour la page des films */}
                    <Route path="/films" element={<Films />} />

                    {/* Route pour la page des genres */}
                    <Route path="/genres" element={<Genres />} />

                    {/* Route pour la page de recherche avancée */}
                    <Route path="/rechercheAvancee" element={<RechercheAvancee />} />

                    {/* Route pour la page des réalisateurs */}
                    <Route path="/realisateurs" element={<Realisateurs />} />
                </Routes>
            </div>
        </Router>
    );
};

// Exportation du composant App
export default App;
