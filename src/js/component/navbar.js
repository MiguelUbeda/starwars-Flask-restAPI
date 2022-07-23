import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const Navbar = () => {
		const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5 text-white">Home</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
  			<button type="button" className="btn btn-success dropdown-toggle m-5" data-bs-toggle="dropdown" aria-expanded="false">
    		Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
			</button>
  			<ul className="dropdown-menu dropdown-menu-end">
				{store.favorites.map((item,i) => {
				return (
					<li key={i}><a className="dropdown-item d-flex justify-content-between">
						{item} <button className="btn btn-outline-secondary border-0 btn-sm" onClick={()=> actions.deleteFavorites(item)}> <i className="fa-solid fa fa-trash"></i></ button>
						</a>
					</li>
					)
				})
				}
  			</ul>
  		</div>
			</div>
		</nav>
	);
};
