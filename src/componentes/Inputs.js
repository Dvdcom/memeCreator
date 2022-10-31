
const Inputs = (num) =>{

    let numeros = num.children;

    let todos = document.querySelectorAll('.box-text');
    todos.forEach((element,index) => {
        if(index < numeros){
            element.classList.remove('d-none');
        }else{
            element.classList.add('d-none');
        }
    });

    return (
        <div className="grupoTextos">
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 1</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 2</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 3</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 4</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 5</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 6</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 7</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 8</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 9</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 box-text d-none">
                <span className="input-group-text" id="basic-addon1">Texto 10</span>
                <input type="text" className="form-control b-text" placeholder="Escribe una frase" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
        );

}

export default Inputs;