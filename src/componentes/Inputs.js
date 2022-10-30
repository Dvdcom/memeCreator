
const Inputs = () =>{

    const total = document.getElementById('cantidadBox')

for (let index = 0; index < total.value; index++) {
    return(
        <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Texto:</label>
        <input type="email" className="form-control text-center m-auto" id="exampleFormControlInput1" placeholder="Ingresa una frase" />
        </div>
    )
}

}
    
    export default Inputs;