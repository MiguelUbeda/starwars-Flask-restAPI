import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        console.log(id, 'dentro use effect');
        actions.loadCharacterDetail(id);
    },[]);

console.log(store.characterDetails);
    return(
        <div>
            <p>En obras</p>
            <h1>{store.characterDetails?.properties?.name}</h1>
            
        </div>
    )
};