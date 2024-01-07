import React, { useState } from 'react';
import styled from 'styled-components';
import ActeursCommuns2Films from './ActeursCommuns2Films';
import FilmsCommuns2Acteurs from './FilmsCommuns2Acteurs';
import FilmsEntre2Annees from "./FilmsEntre2Annees";
import FilmsEntre2Annees1Acteur from "./FilmsEntre2Annees1Acteur";
import  "./RechercheAvancee.css";
import Modal from './Modal';

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f8f8;
`;

const Title = styled.h2`
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;

const RechercheAvancee = () => {
    const [modalResults, setModalResults] = useState([]);
    const [modalTitle, setModalTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUpdateModalResults = (title, results) => {
        setModalTitle(title);
        setModalResults(results);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Wrapper>
            <Title>Recherche Avancée</Title>
            <ActeursCommuns2Films onUpdateModalResults={handleUpdateModalResults} />
            <FilmsCommuns2Acteurs onUpdateModalResults={handleUpdateModalResults} />
            <FilmsEntre2Annees onUpdateModalResults={handleUpdateModalResults} />
            <FilmsEntre2Annees1Acteur onUpdateModalResults={handleUpdateModalResults} />
            {/* Render or update the modal component */}
            {isModalOpen && (
                <Modal title={modalTitle} results={modalResults} onClose={handleCloseModal} />
            )}
        </Wrapper>
    );
};

export default RechercheAvancee;