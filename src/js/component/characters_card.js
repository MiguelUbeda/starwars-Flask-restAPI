import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const CharacterCard = () => {
    const {store, actions} = useContext(Context);
    console.log(store.characters)
    return (
        <>
        {store.characters.map((character, i)=>{
            return(
                <div className="card" style={{width: "18 rem"}} key={character.uid}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + character.uid + ".jpg"} className="card-img-top" alt="Character"/>
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={`/character_details/${character.uid}`}>
						<button href="#" className="btn btn-primary">
							Details
						</button>
				   </Link>
                   <button href="#" className="btn btn-danger m-2" onClick={() => actions.addFavorites(character.name)}> 
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