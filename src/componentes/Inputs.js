import { useUserValores } from '../application/UserProvider'

const Inputs = () =>{

    const valores = useUserValores();
    let limite = 0;
    let arr = [];

    const setearLimite = () => {

        switch (valores.lineas) {
            case 0:
                limite = 0
                break;
            case 2:
                limite = 15
                break;
            case 3:
                limite = 35
                break;
            case 6:
                limite = 35
                break;
            default:
                limite = 35
                break;
        }

    }

    const contarCaracteres = (e) => {
        
        let target = e.target
        let cantidadContada = target.value.length;
        let total = target.nextSibling;
        total.innerHTML = cantidadContada + '/' + limite;

    }

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

export default Inputs;