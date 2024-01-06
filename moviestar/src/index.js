// Importation des modules React nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation du fichier de style principal
import './index.css';

// Importation du composant principal de l'application
import App from './App';

// Importation de la fonction pour mesurer les performances de l'application
import reportWebVitals from './reportWebVitals';

// Création d'une racine React à l'emplacement avec l'ID 'root' dans le document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant principal de l'application dans la racine React
root.render(
    // Utilisation de React.StrictMode pour des avertissements de développement supplémentaires
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Mesure des performances de l'application en appelant la fonction reportWebVitals
// Vous pouvez personnaliser le comportement en passant une fonction à loguer les résultats
// ou en envoyant les résultats à un point d'analyse. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
