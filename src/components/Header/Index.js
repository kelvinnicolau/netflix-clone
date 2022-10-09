import React from 'react';
import './Header.css';

export default () => {
    return (
        <header>
           <div className='header--logo'>
            <a href='/'>
                <img src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg" />
            </a>
           </div>
           <div className='header--user'>
                <a href='/'>
                    <img src="https://occ-0-2192-1123.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSOSJmxT2Mb-Sj5R48dUFw5aPRmfkYH0pK9ZFLKEymURVguMsz647s-6QU7MSFU3lHVYa2wS6yDxepFSWU7fE03_Pt91f3WpFg.png?r=2da"/>
                </a>
           </div>
        </header>
    );
}