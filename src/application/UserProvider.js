import React, { useState,useEffect, useContext } from "react";

    /* userProvider : es un archivo el cual contiene variables de contexto 
        y funciones que se exportan para que tanto las variables como funciones 
        que declare en este archivo se puedan compartir con los demas componentes 
        de manera mas dinamica y sencilla */

    /* declaro constantes de contexto */
    const userListaMemes = React.createContext();
    const userAsignarValores = React.createContext();
    const userValores = React.createContext();

    /* exporto funciones que el unico fin que tienen es relacionar el contexto 
        e importarse de forma sencilla en otros componentes */

    export function useUserListaMemes(){
        return useContext(userListaMemes);
    }

    export function useUserAsignarValores(){
        return useContext(userAsignarValores);
    }

    export function useUserValores(){
        return useContext(userValores);
    }

    /* Exporto la funcion principal del provider en esta coloco
    tanto mis variables a compartir como mis funciones para con los otros componentes */
export function UserProvider(props){

    /* constantes de useState */

    const [listaMemes, setlistaMemes] = useState([]);
    /* listaMemes : contiene el json que devuelve mi fetch cuando consulta a la api */
    const [lineas, setLineas] = useState(null);
    /* lineas : este va a guardar cuantos inputs trae el meme, 
    esta informacion la da la api al llamar 1 solo elemento del listado*/
    const [id, setId] = useState(null);
    /* id: este va a guardar el abreviado del meme , 
    la api devuelve un abreviado para que se puede identificar correctamente*/
    const [url, setUrl] = useState(null);
    /* url: este va a guardar la url que entrega la api con el meme en blanco sin texto */
    const [parametros, setParametros] = useState([]);
    /* parametros es va a guardar la informacion de id 
    y de lineas la cual va a ser usada en otros componentes*/

    /* --- funciones que se utilizar para cambiar los estados de los useStates declarados ---*/

    /* el primer use effect que utilizo , lo hago para que el llamado a la api solo se realice una sola ves. */
    useEffect(()=>{
        lista();
    },[])

    /* con esta funcion disparo el llamado a la api */
    const lista = async () => {
        try{
            const data = await fetch('https://api.memegen.link/templates/')
            /* luego del llamado espero el json */
            const dataJson = await data.json();
            /* y asi como lo resivo , asi lo seteo en listaMemes*/
            setlistaMemes(dataJson);
            }
            catch(error)
            {
            console.log(error.message);
            }
    }

    /* getEventTarget, es una funcion que me extraji de internet , 
        la capturacion de los eventos no se dan de forma correcta, 
        as abajo se encuentra la relacion */
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    /* El segundo useEffect lo utilizo solo para que se accione 
    cuando uno de los estados de lineas , id y url cambien.
    Esto lo tuve que meter porque al parecer hay cierto error en pensar que al setear un useState , 
    el valor de la constante cambiaria de forma automatica, encontre esta solucion en internet */
    useEffect((e)=>{
            let target = getEventTarget(e);
            setLineas(target.id);
            entregarParametros();
    },[lineas,id,url]);

    /* asignarValores se acciona cuando el usuario le da CLICK a un elemento de la lista de memes*/
    const asignarValores = (e) => {
        /* capturo el evento  */
        let target = getEventTarget(e);
        /* seteo lineas con el id. del target de dicho evento  */
        setLineas(target.id);
        /* seteo id con el id. del HIJO del target de dicho evento  */
        setId(target.children[0].id);
        /* seteo url con el src del HIJO del target de dicho evento  */
        setUrl(target.children[0].src);
        /* esto del target se entiende mas cuando se ve el componente principal */
        /* al hacer esto , estoy accionando el segundo useEffect y con eso acciono entregarParametros */
    }

    /* esta funcion ademas de setear parametros tambien realiza algunas acciones*/
    const entregarParametros = () => {
        /* aca junta lo guardado en lineas y en id para ser compartido con posterioridad */
        setParametros({'lineas':parseInt(lineas),'id':id});

        /* esta accion lo que hace es cambiarle la direccion SRC de la imagen default 
            provocando que muestre el meme que el usuario eligio por lista*/
        const img = document.querySelector('#imagen');
        if(url !== null){
            img.setAttribute('src',url);
        }

        /* y esto que meti aca , por no encontrar otra vuelta al problema con los inputs que tuve mas adelante,
        no me quedo de otra que realizar el cambio por este lado , y lo que hace es simple : 
        una ves que entrega cambia la imagen que el usuario elige de la lista , 
        pone todos los inputs creados con el value VACIO y los contadores de cada uno los quita.*/
        const contenedorInputs = document.querySelector('.inputs');
        if(contenedorInputs.children.length > 0){
            const inputs = document.querySelectorAll('.contador');
            inputs.forEach(element => {
            element.value = "";
            element.nextSibling.innerHTML = "";
            });
        }
        
    }

    /* al finalizar retorno todo el provider! 
    lo que al principio cuesta ver aca es donde se relaciona */

    return(
        
        <userListaMemes.Provider value={listaMemes}>
            <userAsignarValores.Provider value={asignarValores}>
                <userValores.Provider value={parametros}>
                    {props.children}
                </userValores.Provider>
            </userAsignarValores.Provider>
        </userListaMemes.Provider>
    )

}

/* relaciono la funcion que exporto al pricipio de useUserListaMemes , con la constante listaMemes y lo paso */
/* relaciono la funcion que exporto al pricipio de userAsignarValores , con la FUNCION asignarValores y lo paso */
/* relaciono la funcion que exporto al pricipio de userValores , con la constante parametros y lo paso */
/* por eso las 3 constantes de contexto con sus 3 respectivas funciones exportadas */