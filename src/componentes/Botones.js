/* USO DEL PROVIDER, vuelvo a importar 1 de mis funciones que declare anteriormente */
import { useUserValores } from '../application/UserProvider'

const Botones = () => {

    /* creo un arreglo para las frases */
    let frases = [];
    /* traigo las variables del provider en este caso utilizo el 
    valor de 'id' que es el que tiene la abreviacion del meme seleccionado */
    const valores = useUserValores();
    /* variable que declaro para realizar cambio de src para la imagen */
    let urlNueva = "";

    /* mi funcion para recorrer las frases y juntarlas
    esto funciona recorriendo todos los elementos inputs, y extrayendo todo lo que los usuarios escribieron, 
    los junta y los guarda en un arreglo, en el arreglo de frases */
    const pasarFrases = () =>{
        let textos = document.querySelectorAll('.b-text');
        textos.forEach(element => {
            if (element.value !== ""){
                frases.push(element.value);
                element.value = "";
            }
        });
        /* validacion */
        if(document.querySelector('.imagenDefault').id === "imagen"){
            alert('Debe de seleccionar un meme para aplicar');
            return;
        }
        if(frases.length === 0) {
            alert('Debe de ingresar al menos una frase');
            return;
        }
        /* concatenacion es una variable que utilizare para concatenar todas las frases */
        let concatenacion = "";
        /*  recorro mi arreglo creado y en cada elemento transformo los ? en signos (~q) y 
        cada espacion vacio en guiones bajo, esto es asi porque es informacion para la api */
        frases.forEach(element => {
            let newText = element.replace(/\s+/g, '_');
            newText = element.replace('?','~q');
            concatenacion += newText + "/";
        });
        /* una ves hecho la concatenacion vuelvo a poner vacia el array de frases */
        frases = [];
        /* 
            urlNueva : la ventaja de usar esta api, te da la opcion de poner todas las frases 
            en la misma url y te entrega la imagen ya hecha con las frases que customizaste , 
            sin necesidad de estar cambiando estilos, todo lo da la api con la url. 
            (para esto identifico el meme que quiero con el id y con las frases)
        */
        urlNueva = `https://api.memegen.link/images/${valores.id}/${concatenacion}.png`
        /* una ves que tengo concatenado todo solo selecciono 
        la imagen default que tengo en el navegador y le cambio el SRC  */
        document.querySelector('.imagenDefault').src = urlNueva;

        /*coloco todos los contadores en 0*/
        let contadores = document.querySelectorAll('.total');
        contadores.forEach(element => {
            element.textContent= ""
        });
    }

    const descargar = () =>{
        /* validacion de boton*/
        if(document.querySelector('.imagenDefault').id === "imagen"){
            alert('Debe de seleccionar un meme para descargar');
            return;
        }
        if(urlNueva === "") {
            alert('Debe de generar un meme para descargar');
            return;
        }
        /* esta funcion la saque de internet , la declaro y debajo la disparo con la nuevaURL */
        async function downloadImage(imageSrc) {
            const image = await fetch(imageSrc)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)
    
            const link = document.createElement('a')
            link.href = imageURL
            link.download = 'memeCreator'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
        downloadImage(urlNueva);
    }

    /* retorno los botones con sus respectivas funciones*/

    return (
        <div>
        <button type="button" onClick={pasarFrases} className="btn btn-info btn-lg me-3">Aplicar</button>
        <button type="button" onClick={descargar} className="btn btn-info btn-lg">Descargar</button>
        </div>

    )
}

export default Botones;