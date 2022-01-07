import React from 'react';
import ReactDOM from 'react-dom';
import { traverseTwoPhase } from 'react-dom/cjs/react-dom-test-utils.production.min';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo =() => {
    return (
        <div>
            <Tilt className='pos br3 shadow-3' options={{max: 55}} style={{ height: '100px',width: '100px'}}>
                <div>
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
};

ReactDOM.render(<Logo />, document.getElementById('root'));
export default Logo;