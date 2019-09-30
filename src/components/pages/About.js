import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { async } from 'q';
import Recipe from './Recipe';

const About = () => {

    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    // const api = `${proxy}https://fortnite-api.theapinetwork.com/upcoming/get`;

    const APP_ID = "1de9d3ad";
    const APP_KEY = "0e3df22ff1ba6f051bd614407348b3c0";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]); //[] only runs once (when app mounts)


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
        const data = await response.json();
        setRecipes(data.hits);
        
    }
    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <React.Fragment>
          <div>
              <form onSubmit={getSearch} className="search-form">
                  <input className = "search-bar" type="text" value = {search} onChange={updateSearch}/>
                  <button className = "search-button" type="submit">Search</button>
              </form>
              {recipes.map(recipe => (
                  <Recipe 
                  key = {recipe.recipe.label} 
                  title = {recipe.recipe.label} 
                  calories = {recipe.recipe.calories} 
                  image = {recipe.recipe.image}
                  ingredients = {recipe.recipe.ingredients}
                  />
              ))}
         </div>
       </React.Fragment>
      );
};

export default About;