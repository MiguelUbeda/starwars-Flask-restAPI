import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const PlanetCard = () => {
    const {store, actions} = useContext(Context);
    return (
        <>
        {store.planets.map((planet, i)=>{
            return(
                <div className="card m-2 border-warning" style={{width: "18 rem"}} key={planet.uid}>
                <img src={"https://starwars-visualguide.com/assets/img/planets/" + planet.uid + ".jpg"} className="card-img-top" alt="Planet"/>
                <div className="card-body text-white bg-black">
                  <h5 className="card-title">{planet.name}</h5>
                  <Link to={`/planets_details/${planet.uid}`}>
						<button href="#" className="btn btn-light">
							Details
						</button>
				   </Link>
                   <button href="#" className="btn btn-danger m-2" onClick={() => actions.addFavorites(planet.name)}> 
                   <i className="fa-solid fa fa-heart"></i>
                    </button>
                </div>
              </div>
            )
        }
           
        )}
        </>
    )
};