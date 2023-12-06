export default function Movie({name, category, onDelete}) {
    return (
        <div className="border-2 w-60 border-black rounded bg-slate-400 m-1 p-2">
            <h3 className="cursor-pointer font-bold text-xl hover:underline">{name}</h3>
            <p>{category}</p>
            <p>
                <button class="cursor-pointer border-2 rounded border-blue-500 bg-blue-500 w-32 hover:bg-slate-400" onClick={() => onDelete(name)}>Delete</button>
            </p>
        </div>
    );
}