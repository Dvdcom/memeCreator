const Botones = () => {

    /* creo un arreglo para las frases */
    let frases = [];
    /* creo una variable que selecciona imagendefault */
    const id = document.querySelector('.imagenDefault');
    /* funcion de pasar frase */
    const pasarFrases = () =>{
        let textos = document.querySelectorAll('.b-text');
        textos.forEach((element,index) => {
            if (element.value !== ""){
                frases.push(element.value);
                element.value = "";
            }
        });
        let concatenacion = "";

        frases.forEach(element => {
            concatenacion += element + "/";
        });

        frases = [];

        let urlNueva;
        urlNueva = `https://api.memegen.link/images/${id.id}/${concatenacion}.png`
        document.querySelector('.imagenDefault').src = urlNueva;

    }

    const descargar = () =>{

    }

    return (
        <div>
        <button type="button" onClick={pasarFrases} className="btn btn-info btn-lg me-3">Aplicar</button>
        <button type="button" onClick={descargar} className="btn btn-info btn-lg">Descargar</button>
        </div>

    )
}

export default Botones;