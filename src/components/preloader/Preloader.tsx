import React from 'react'
import preloader from './../../media/preloaders/preloaderRing.svg';
import cmedia from './preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={cmedia.preloader}>
            <img src={preloader} alt="" />
        </div>
    )
}

export default Preloader