import React from 'react';
import "./swipebutton.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function Swipebutton() {
    return (
        <>
        <div className="swipebutton">
            <ReplayIcon className="ri" fontSize="large"/>
            <CloseIcon className="ci" fontSize="large"/>
            <StarRateIcon className="sri" fontSize="large"/>
            <FavoriteIcon className="fi" fontSize="large"/>
            <FlashOnIcon className="foi" fontSize="large"/>
        </div>
        </>
    );
}

export default Swipebutton;
