/* USO DEL PROVIDER, vuelvo a importar 1 de mis funciones que declare anteriormente */
import { useUserValores } from '../application/UserProvider'

const Inputs = () =>{

    /* traigo nuevamente la informacion del provider y la pego en valores , 
    recordando que este esta guardado como un objeto por lo que para usarlo 
    puedo llamarlo de manera muy simple tanto como valore.lineas , o valores.id*/
    const valores = useUserValores();

    /* inicio estas variables que mas adelante se utilizan */
    let limite = 0;
    let arr = [];

    /* esta funcion le da un limite inicial 
    según cuantos inputs sean los que puede tener el meme,
    informacion pasada desde el provider con valores.lineas */
    const setearLimite = () => {

        switch (valores.lineas) {
            case 0:
                limite = 0
                break;
            case 2:
                limite = 35
                break;
            case 3:
                limite = 45
                break;
            case 6:
                limite = 60
                break;
            default:
                limite = 60
                break;
        }
        
        /* esta seccion de la funcion no tiene que ver con el seteo de limites : 
            tiene que ver con la verificacion de los inputs creados, 
            esto soluciona un problema que me presentaron los inputs 
            al crearlos y es que los mismos NO se borraban cuando se creaban, 
            es decir aparecia el mismo input creado con la informacion anteriormente cargada*/
        const contenedorInputs = document.querySelector('.inputs');
        if (contenedorInputs !== null){
            if(contenedorInputs.children.length > 0 ){
                const inputs = document.querySelectorAll('.contador');
                inputs.forEach(element => {
                    element.value = "";
                    element.nextSibling.innerHTML = "";
                });
            }
        }

    }

    /* esta funcion realiza el conteo de los caracteres, 
    utilizo la capturacion del evento ya que de esta forma 
    puedo saber que input esta cambiando , sin esto , 
    solo daria como resultado que le contaria solo al primer input los demas no realizarian el conteo */
    const contarCaracteres = (e) => {
        
        let target = e.target
        let cantidadContada = target.value.length;
        let total = target.nextSibling;
        total.innerHTML = cantidadContada + '/' + limite;

    }
    /* mi retorno del componente va a ser mediante un for construir todos los 
    div con los inputs correspondiente que debe de tener , 
    una forma mas practica que la de escribir todos los inputs, ocultarlos y mostrarlos (que es como lo tenia antes). */
    return (
        <div className='grupoTextos inputs'>
            {(() => {
                setearLimite();
                for (let i = 0; i < valores.lineas; i++) {
                    arr.push(
                        <div className="input-group input-group-sm mb-3 box-text" key={i}>
                        <span className="input-group-text" id="inputGroup-sizing-sm">Texto {i+1}</span>
                            <input type="text" className="form-control b-text contador" onPaste={contarCaracteres} onKeyUp={contarCaracteres} maxLength={limite} placeholder="Escribe una frase" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        <span className="input-group-text total" id="inputGroup-sizing-sm"></span>
                        </div>
                    );
                }
                return arr;
            })()}
        </div>
        );

}
/* NOTA : nuevamente dentro del return devuelvo un bucle , al parecer no puede tirarse un for directamente , 
se debe de realizar a traves de una funcion, pero no basta solo con eso , la funcion , 
pushea todos los div al arreglo previamente declarado y al finalizar dicha funcion retorna todo el arreglo */
/* NOTA 2 : respecto al bucle no importa si es un for o un map , en algun momento te obliga a ponerle una KEY al div contenedor, a tener en cuenta. */
export default Inputs;