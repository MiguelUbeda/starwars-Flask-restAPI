const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			characterDetails: null,
			planetDetails: null,
			favorites: [],
		},
		actions: {			
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({characters: data.results}))
					.catch(error => console.log(error));

			},
			loadCharacterDetail: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
						.then(response => response.json())
						.then( data => setStore({characterDetails: data.result}))
						.catch(error => console.log(error))
			},	    
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({planets: data.results}))
					.catch(error => console.log(error));

			},
			loadPlanetDetail: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
						.then(response => response.json())
						.then( data => setStore({planetDetails: data.result}))
						.catch(error => console.log(error))
			},
			addFavorites: (name) =>{
				const {favorites} = getStore();
				if (!favorites.includes(name)){
					favorites.push(name)
				} 
				setStore({favorites})
			},
			deleteFavorites: (name) =>{
				const {favorites} = getStore();
				const favoritos = favorites.filter((item)=>(item !== name))
				setStore({favorites: favoritos})
				
			}
			
			
		}
	};
}
export default getState;
