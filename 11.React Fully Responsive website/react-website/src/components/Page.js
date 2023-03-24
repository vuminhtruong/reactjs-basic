import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

function Page() {
    return (
        <div className='page-container'>
            <video src='video/video-2.mp4' autoPlay muted loop id="myVideo" />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='info-btns'>
                <Button variant="outline-light">GET STARTED</Button>
                <Button variant="outline-secondary" style={{color: 'white'}}>WATCH TRAILER <FontAwesomeIcon icon={faClapperboard} style={{color: 'white'}} /></Button>
            </div>
        </div>
    );
}

export default Page;