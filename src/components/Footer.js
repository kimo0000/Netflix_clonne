import React from 'react';
import './style/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h3>Des questions ? Contactez-nous.</h3>
                    <div className="footer_boxs">
                            <a href="/">FAQ</a>
                            <a href="/">Presse</a>
                            <a href="/">Modele de lecture</a>
                            <a href="/">Preference de cookies</a>
                            <a href="/">Test de vitesse</a>
                       
                            <a href="/">Centre d'aide</a>
                            <a href="/">Relations Investisseurs</a>
                            <a href="/">Conditions d'utilisation</a>
                            <a href="/">Mentions légales</a>
                            <a href="/">Informations légales</a>
                        
                            <a href="/">Compte</a>
                            <a href="/">Recrutement</a>
                            <a href="/">Confidentialité</a>
                            <a href="/">Nous contacter</a>
                            <a href="/">Seulement sur Netflix</a>
                    </div>
                    <div className="footer_select">
                        <i className="fa-solid fa-globe"></i>
                        <span>FRANCAIS</span>
                        <select>
                           <option value="arabe">arabe</option>
                           <option value="Francais">Francais</option>
                           <option value="English">English</option>
                        </select>
                    </div>
                    <p className="footer_copy">Netflix Tunisie</p>
            </div>            
        </footer>
    );
};

export default Footer;