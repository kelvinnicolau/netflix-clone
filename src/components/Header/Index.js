import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
           <div className='header--logo'>
            <a href='/'>
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" />
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