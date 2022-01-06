import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo =() => {
    return (
        <div>
            <Tilt className='center br3 shadow-3' options={{max: 55}} style={{ height: '150px',width: '130px'}}>
                <div>
                    <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
                </div>
            </Tilt>
        </div>
    );
};

ReactDOM.render(<Logo />, document.getElementById('root'));
export default Logo;