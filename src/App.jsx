// --- src/App.jsx ---
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Importeren

// Globale stijlen
import './App.css'; 

// Hoofdcomponenten
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';

// Pagina-componenten
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AccountancyPage from './pages/Services/AccountancyPage';
import TaxLegalPage from './pages/Services/TaxLegalPage';
import ScrollToTop from './components/Utils/ScrollToTop';
import StrategicAdvicePage from './pages/Services/StrategicAdvicePage';
import CareerPage from './pages/CareerPage';
import './styles/animations.css';
import './styles/alternating-animations.css';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <React.Fragment>
            <ScrollToTop/>
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <main>
                <Routes> {/* Routes container */}
                    <Route path="/" element={<HomePage />} /> {/* Route voor de homepage */}
                    <Route path="/about" element={<AboutPage />} /> {/* Route voor de about pagina */}
                    <Route path="/diensten" element={<ServicesPage />} /> {/* Route voor de about pagina */}
                    <Route path="/diensten/accountancy" element={<AccountancyPage />} /> {/* Route voor de about pagina */}
                    <Route path="/diensten/tax-legal" element={<TaxLegalPage />} /> {/* Route voor de about pagina */}
                    <Route path="/diensten/strategic" element={<StrategicAdvicePage />} /> {/* Route voor de about pagina */}
                    <Route path="/werken-bij" element={<CareerPage />} /> {/* <-- Nieuwe route */}
                    {/* Hier kun je later meer routes toevoegen */}
                </Routes>
            </main>
            <Footer />
        </React.Fragment>
    );
}
