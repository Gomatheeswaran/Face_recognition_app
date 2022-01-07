import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =() => {
    return (
        <div>
            <p className='f3'>
                {'This BrainChip will detect Faces in picture, Lets try!'}
            </p>
            <div className='center w-70'>
                <div className='form center pa4 br4 shadow-2'>
                    <input className='f3 pa2 w-70' type='text'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Find faces</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;