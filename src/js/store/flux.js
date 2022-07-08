const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characterDetails: null,
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
			addFavorites: (name) =>{
				const {favorites} = getStore();
				favorites.push(name)
				setStore({favorites})
			},
			deleteFavorites: (name) =>{
				const {favorites} = getStore();
				const favoritos = favorites.filter((item)=>(item !== name))
				setStore({favorites: favoritos})
				
			}
			
			}
		}
	};

export default getState;
