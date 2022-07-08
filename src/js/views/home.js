import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characters_card";
export const Home = () => {
	
	return (
		<>
		<h1 className="display-1 text-center">STAR WARS</h1>
		<div className= "d-flex">
		<CharacterCard />
		</div>
		</>
	)
}
