import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Botones from "./Botones"

const Formprincipal = (props) => {

    const urlApi = 'https://api.memegen.link/templates/';

    const [num, setNum] = useState(0);

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }


    useEffect(() => {

        let ul = document.getElementById('list');
        ul.onclick = function (event) {
            let target = getEventTarget(event);
            setNum(parseInt(target.id));
        }
    });


    const lista = () => {
        fetch(urlApi)
            .then(res => res.json())
            .then((json) => {
                json.forEach(element => {
                    let id = JSON.stringify(element.id);
                    let url = JSON.stringify(element.blank);
                    let lines = JSON.stringify(element.lines);
                    let item = document.createElement('li');
                    item.classList.add("dropdown-item");
                    item.setAttribute('id', `${lines}`);
                    item.setAttribute('onclick', `seleccionar(${url}, ${id})`);
                    item.innerHTML = `<img src=${element.blank} id=${element.id} style="width:30px;height:30px margin-left:5px" class="me-2"></img>${element.name}`
                    document.querySelector('.dropdown-menu').appendChild(item);
                });
            })
    }

    lista();

    /* El componente texto debera de aparecer solo cuando se haya seleccionado */
    return (
        <div className="text-center d-flex justify-content-center">
            <div className="col col-lg-6 col-md-6 col-sm-8 col-xs-8">
                <form
                    onSubmit={ev => { ev.preventDefault(); }}
                    className="form-control container frm">

                    <div className="mb-3">
                        <div className="dropdown-center">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seleccione Meme
                            </button>
                            <ul className="dropdown-menu" id='list'></ul>

                        </div>
                    </div>
                    <figure className="figure">
                        <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" className="mt-3 imagenDefault" id="imagen" alt="img-default"></img>
                    </figure>
                    <Inputs>{num}</Inputs>

                    <Botones />
                </form>
            </div>
        </div>
    );
}


export default Formprincipal;


