import Movie from "./movie.js";

export default function Movielist({movies, onDelete}){
    function handleDelete(name) {
        onDelete(name);
    }

    return (
        <div className="block mb-4">
            <h1 className="text-2xl font-bold mt-8 mb-8 ml-8">Movies</h1>
                {movies.map((movie, index) => (
                    <div className="ml-8" key={index}>
                        <Movie name={movie.name} category={movie.category} onDelete={handleDelete} />
                    </div>
                ))}
        </div>
    )
}