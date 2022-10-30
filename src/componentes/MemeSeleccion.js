

import Inputs from './Inputs';

const MemeSeleccion = () => {
    const urlApi = 'https://api.memegen.link/templates/';


    fetch(urlApi)
    .then(res => res.json())
    .then((json) => {

        json.forEach(element => {
            /* por cada elemento creo un li personalizado para mi lista */
            let item = document.createElement('li');
            /* al li creado le agrego una clase de bootstrapt para que tenga mejor formato*/
            item.classList.add('dropdown-item');
            /* creo el contenido de <li> personalizado con imagen y nombre */ 
            let liPersonalizado = `<img src=${element.blank} style="width:30px;height:30px" class="me-2"></img>${element.name}`
            /* me creo una variable tanto para el id que en este caso me indica la url en blanco del meme */
            let id = JSON.stringify(element.blank);
            /* y me creo una variable que me muestra cuantas textbox requiere cada meme */
            let lines = JSON.stringify(element.lines);
            /* sobre el li creado  le añado un evento onclick , para que el li al ser seleccionado active una funcion y pase la informacion de la url y cantidad de textbox */
            item.setAttribute('onclick',`seleccionar(${id},${lines})`);
            /* agrego la imagen y el nombre de la imagen al li */
            item.innerHTML = liPersonalizado;
            /* finalmente añado el <li> al <ul> */
            document.querySelector('.dropdown-menu').appendChild(item);
        });
    });
    
/* El componente texto debera de aparecer solo cuando se haya seleccionado */
    return (
        <div className="text-center d-flex justify-content-center">
            <div className="col col-lg-6 col-md-6 col-sm-8 col-xs-8">
                <form 
                onSubmit={ev => { ev.preventDefault();}}
                className="form-control container frm">

                    <div className="mb-3">
                        <div className="dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seleccione Meme
                            </button>
                            <ul className="dropdown-menu"></ul>
                            <span className="d-none" id="cantidadBox">0</span>
                        </div>
                    </div>
                    <figure className="figure">
                        <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" className="mt-3" id="imagen" alt="img-default"></img>
                    </figure>
                    <Inputs />
                    <button type="button" className="btn btn-info btn-lg me-3">Aplicar</button>
                    <button type="button" className="btn btn-info btn-lg">Descargar</button>
                </form>
            </div>
        </div>
    );
}


export default MemeSeleccion;


