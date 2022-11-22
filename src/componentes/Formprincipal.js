/* USO DEL PROVIDER, importo 2 de mis funciones que declare anteriormente */
import { useUserListaMemes,useUserAsignarValores } from '../application/UserProvider'
/* este componente a su ves tiene componentes hijos que componente su cuerpo tambien los importo*/
import Inputs from "./Inputs";
import Botones from "./Botones";

/* el componente principal es como el armazon del formulario */
const Formprincipal = () => {

    /* inicio trayendome las funciones declaradas en el provider , 
    estas vienen con la informacion que generan cuando se renderiza por primera ves todo*/
    const listaMemes = useUserListaMemes();
    /* para listaMemes , me trae el json que el fetch me tiro la primera ves */
    const seleccionar = useUserAsignarValores();
    /* para seleccionar, simplemente hago la relacion de 
    la constante para que se pueda usar la funcion asignarValores escrita en el userPROVIDER */

    /* retorno un formulario */
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
                            <ul className="dropdown-menu" id='list'>
                            {/* con map tomo el json de listaMemes lo recorro y convierto todos los <li> a mi conveniencia 
                                dentro de cada li le voy asignando, id , onclick , src, para que esa informacion pegada en las etiquetas la pueda usar cuando el usuario realice la seleeccion */}
                                {listaMemes.map((element, index) => (
                                    <li key={index} className="dropdown-item" id={element.lines} onClick={seleccionar}>
                                        <img src={element.blank} id={element.id} style={{ width: "30px", height: "30px" }} className="me-2" alt={"img-" + element.id} />
                                        {element.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <figure className="figure">
                        <img src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" className="mt-3 imagenDefault" id="imagen" alt="img-default"></img>
                    </figure>
                    <Inputs></Inputs>
                    <Botones />
                </form>
            </div>
        </div>
    );
}
/* NOTA : del bucle dentro del return , buscando informacion me encontre que el foreach dentro del jsx no es lo suficiente practico para ejecutarse, por lo que se recomienda ampliamente utilizar .map*/
/* NOTA 2 : respecto al bucle no importa si es un for o un map , en algun momento te obliga a ponerle una KEY al div contenedor, a tener en cuenta. */
export default Formprincipal;


