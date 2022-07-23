import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/characters_card";
import { PlanetCard } from "../component/planets_card";
export const Home = () => {
	
	return (
		<>
		<img id="logo" className="rounded mx-auto d-block" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"/>
		<h2 className="text-center text-warning">Characters</h2>
		<div className= "d-flex section">
			<CharacterCard />
		</div>
		<h2 className="text-center text-warning mt-4">Planets</h2>
		<div className= "d-flex section">
			<PlanetCard />
		</div>
		//<iframe width="560" height="315" src="https://www.youtube.com/embed/tGsKzZtRwxw?autoplay=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mx-auto d-block mt-3"></iframe>
		</>

	)
}
