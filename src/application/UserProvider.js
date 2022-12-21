
import React, { useState, useEffect, useContext } from "react";

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

export function useUserListaMemes() {
    return useContext(userListaMemes);
}

export function useUserAsignarValores() {
    return useContext(userAsignarValores);
}

export function useUserValores() {
    return useContext(userValores);
}

/* Exporto la funcion principal del provider en esta coloco
tanto mis variables a compartir como mis funciones para con los otros componentes */
export function UserProvider(props) {

    /* constantes de useState */
    const [listaMemes, setlistaMemes] = useState([]);
    /* incio los parametros la primera que de una respuesta en la primera renderizacion */
    const [parametros, setParametros] = useState({lineas:0,id:"imagen",src:"https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"});

    /* con useEffect me aseguro que el llamado a la api se realice una sola ves */
    useEffect(() => {
        lista();
    }, [])

    /* con esta funcion disparo el llamado a la api */
    const lista = async () => {
        try {
            const data = await fetch('https://api.memegen.link/templates/')
            /* luego del llamado espero el json */
            const dataJson = await data.json();
            /* y asi como lo recibo , asi lo seteo en listaMemes*/
            setlistaMemes(dataJson);
        }
        catch (error) {
            console.log(error.message);
        }
    }

    /* con esta funcion lo que hago es asignarle los valores a parametros 
        esta funcion se ejecuta solo cuando el usuario selecciona un meme de la lista previamente cargada */
    const asignarValores = (e) => {
        /* la 'e' que pasa la funcion es el evento capturado esto representaria toda 
        la etiqueta <li> con sus childrens => etiquetas que estan dentro de esta <li>  */
        let valorLineas = parseInt(e.target.id);
        /* la variable valorLineas extrae del target <li> el id de este, 
        el cual contiene cuantas inputs tiene cada meme */
        let valorId = e.target.children[0].id;
        /* valorId es extraido del elemento hijo al <li> , el cual seria la etiqueta <img>
        de este trae el id , el cual seria la abreviacion del meme elegido */
        let valorUrl = e.target.children[0].src;
        /* valorUrl tambien es extraido del hijo <li> , el cual seria la etiqueta <img> 
            de este extrae el la url del imagen pequeña , esta mostrara el meme en blanco */

        /* todos los valores asignados los seteos en mi constante parametros, esto es para poder usarla mas adelante */
        setParametros({ lineas:valorLineas, id:valorId, src:valorUrl });

    }

    /* en esta parte donde se retorna el provider, es aca donde se relaciona todo 
    las funciones declaradas arriba , las constantes , las funciones usadas dentro del provider. */

    return (
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