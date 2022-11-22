import { useUserValores } from '../application/UserProvider'

const Botones = () => {

    /* creo un arreglo para las frases */
    let frases = [];
    /* creo una variable que selecciona imagendefault */
    const valores = useUserValores();

    let urlNueva;
    /* funcion de pasar frase */
    const pasarFrases = () =>{
        let textos = document.querySelectorAll('.b-text');
        textos.forEach(element => {
            if (element.value !== ""){
                frases.push(element.value);
                element.value = "";
            }
        });

        let concatenacion = "";

        frases.forEach(element => {
            let newText = element.replace(/\s+/g, '_');
            newText = element.replace('?','~q');
            concatenacion += newText + "/";
        });

        frases = [];

        urlNueva = `https://api.memegen.link/images/${valores.id}/${concatenacion}.png`
        document.querySelector('.imagenDefault').src = urlNueva;

        /*contadores de caracternes en 0*/
        let contadores = document.querySelectorAll('.total');
        contadores.forEach(element => {
            element.textContent= ""
        });
    }

    const descargar = () =>{
        
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

    return (
        <div>
        <button type="button" onClick={pasarFrases} className="btn btn-info btn-lg me-3">Aplicar</button>
        <button type="button" onClick={descargar} className="btn btn-info btn-lg">Descargar</button>
        </div>

    )
}

export default Botones;