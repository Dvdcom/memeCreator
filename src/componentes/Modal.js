import React from 'react';

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = () => {
    return (
        <div className='modalcontenedor'>
            <p>porque este editor<br/> 
                no tiene ajustes<br/>
                de color? <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#61DAFB' }}/></p>
        </div>
    );
};

export default Modal;