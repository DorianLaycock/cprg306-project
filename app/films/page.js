"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import Movielist from "./movielist.js";
import Movieform from "./movieform.js";
import Movie from "./movie.js";

const moviesData = [
  {name:"Hot Fuzz", year: "2007", category:"action/comedy"},
  {name:"The Return of the King", year: "2003", category:"fantasy"},
  {name:"Oldboy", year:"2003", category:"action/thriller"},
];

/*async function fetchMovie(){
  try {
    response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipe}");
    const data = await response.json();
    return data.message;
  } catch (error){
    console.error(error);
  }
}*/

export default function Page() {

  const [movies, setMovies] = useState(moviesData);
  const [recipe, setMovie] = useState([]);

  /*async function loadMovies(){
    const movies = await fetchMovie();
    set(movies);
  }

  useEffect(() => {
    loadMovies();
  }, []);*/

  function handleSubmit(movie){
    setMovies([...movies, movie]);
  }

  function handleDelete(name){
    setMovies(movies.filter((movie) => movie.name !== name));
  } 

  return (
  <main>
    <div className="flex flex-col justify-center items-center w-screen">
      <h1 className="text-4xl">Film search</h1>
      <Link class = "block" href="/">Homepage</Link>
    </div>
    <div className="flex flex-row border border-white">
      <div className="flex basis-1/3 w-150">
        <Movieform onSubmit ={(movie) => handleSubmit(movie)} />
      </div>
      <div className="flex basis-1/3 justify-center border border-white"> 
      <p>
        Placeholder for movie
      </p>
        {/* <select name = "movies">
          {Object.keys(movies).map((movie) => (
            <option key={movie}>{movie}</option>
            ))}
        </select> */}
      </div>
    </div>
    <div>
      <Movielist movies ={movies} onDelete = {handleDelete} />
    </div>
  </main>
  );
}
