import React, { useState,useEffect, useContext } from "react";

    /* const de contexto */
    const userListaMemes = React.createContext();
    const userAsignarValores = React.createContext();
    const userValores = React.createContext();

    /* export funcition que devuelven los contexto */

    export function useUserListaMemes(){
        return useContext(userListaMemes);
    }

    export function useUserAsignarValores(){
        return useContext(userAsignarValores);
    }

    export function useUserValores(){
        return useContext(userValores);
    }

export function UserProvider(props){

    /* const usestate */
    const [listaMemes, setlistaMemes] = useState([]);
    const [lineas, setLineas] = useState(null);
    const [id, setId] = useState(null);
    const [url, setUrl] = useState(null);
    const [parametros, setParametros] = useState([]);

    useEffect(()=>{
        lista();
    },[])


    const lista = async () => {
        try{
            const data = await fetch('https://api.memegen.link/templates/')
            const dataJson = await data.json();
            setlistaMemes(dataJson);
            }
            catch(error)
            {
            console.log(error.message);
            }
    }

    /* funcion que cambia los estados */
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    useEffect((e)=>{
            let target = getEventTarget(e);
            setLineas(target.id);
            entregarParametros();
    },[lineas,id,url]);

    const asignarValores = (e) => {
        let target = getEventTarget(e);
        setLineas(target.id);
        setId(target.children[0].id);
        setUrl(target.children[0].src);
        /* entregarParametros() */;
    }

    const entregarParametros = () => {
        setParametros({'lineas':parseInt(lineas),'id':id});

        const img = document.querySelector('#imagen');
        if(url !== null){
            img.setAttribute('src',url);
        }

        const contenedorInputs = document.querySelector('.inputs');
        if(contenedorInputs.children.length > 0){
            const inputs = document.querySelectorAll('.contador');
            inputs.forEach(element => {
            element.value = "";
            element.nextSibling.innerHTML = "";
            });
        }
        
    }

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