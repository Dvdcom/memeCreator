/* USO DEL PROVIDER, importo 2 de mis funciones que declare anteriormente */
import { useUserListaMemes,useUserAsignarValores,useUserValores } from '../application/UserProvider'
/* este componente a su ves tiene componentes hijos que componente su cuerpo tambien los importo*/
import Inputs from "./Inputs";
import Botones from "./Botones";

/* el componente principal es como el armazon del formulario */
const Formprincipal = () => {

    /* inicio trayendome las funciones declaradas en el provider , 
    estas vienen con la informacion que generan cuando se renderiza por primera ves todo*/

    const listaMemes = useUserListaMemes();
    /* para listaMemes , me trae el json que el fetch me tiro la primera ves */

    const valores = useUserValores();
    /* en valores voy a guardar los parametros que se setearon con la funcion asignarValores */

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
                                        <img src={element.blank} id={element.id} style={{ width: "30px", height: "30px" }} className="me-2 imge" alt={"img-" + element.id} />
                                        {element.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <figure className="figure">
                        {/* importante : aca utilizo valores, al hacerse la primera renderizacion va a tomar los primeros valores parametrizados
                        esto cambia y se vuelve a renderizar cuando se utiliza la funcion asignarValores  */}
                        <img src={valores.src} className="mt-3 imagenDefault" id={valores.id} alt="img-default"></img>
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


