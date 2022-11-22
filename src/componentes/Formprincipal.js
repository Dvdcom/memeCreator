
import { useUserListaMemes,useUserAsignarValores } from '../application/UserProvider'
import Inputs from "./Inputs";
import Botones from "./Botones";


const Formprincipal = () => {

    const listaMemes = useUserListaMemes();
    const seleccionar = useUserAsignarValores();

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
                            <ul className="dropdown-menu" id='list'>
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


export default Formprincipal;


