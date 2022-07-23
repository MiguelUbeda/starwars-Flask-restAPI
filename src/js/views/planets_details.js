import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const PlanetsDetails = () => {
    const {store, actions} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        actions.loadPlanetDetail(id);
    },[]);

    return(
        <div className="container text-white">
        
            <h1 className="d-block text-center text-warning m-5">{store.planetDetails?.properties?.name}</h1>
            
            <div className="d-flex">
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + id + ".jpg"} className="border-warning width: w-25 h-25" alt="Character"/>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Description
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.planetDetails?.description}</li>
                </ul>
            </div>
            
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Diameter
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.planetDetails?.properties?.diameter}</li>
                </ul>
            </div>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Gravity
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.planetDetails?.properties?.gravity}</li>
                </ul>
            </div>
            <div className="card ms-5 bg-black">
                <div className="card-header bg-warning">
                    Climate
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-black text-white">{store.planetDetails?.properties?.climate}</li>
                </ul>
            </div>
            </div>
            
        
        </div>
    )
};