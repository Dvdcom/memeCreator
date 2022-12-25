import React from 'react';

import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = () => {
    return (
        <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-secondary">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">¿Porque que faltan ajustes?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Decidi no poner ajustes de color por una cuestion de logica en el codigo, la misma se basa en capturar los textos subirlos a un link y de esta forma que la <strong>MISMA api</strong> acomode segun su preferencia, esto me da la ventaja de tampoco <strong>NO programar</strong> ninguna aliniacion , como dicha accion tambien la pone la api, solo se necesita pasarle el texto y se encargara de posicionar el texto correctamente independiente de que meme sea.</p>
                        <p>Para compensar estos ajustes he decidido meter ajustes de estilos para que el usuario elija que tipo de letras quiere utilizar en el meme, tambien agregue la opcion de darle tamaño al meme, estas opciones son permitidas gracias a la api que consulto.</p>
                        <p>Por ultimo me gustaria destacar el uso del provider implementado para la logica de la app, ya que su implementacion me llevo a aprender mucho de react y entender perfectamente como funcionan los hooks.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='modalcontenedor'>
                <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <p>porque este editor<br/> 
                    no tiene ajustes<br/>
                    de color? <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: '#61DAFB' }}/></p>
                </button>
        </div>
        </>

    );
};

export default Modal;