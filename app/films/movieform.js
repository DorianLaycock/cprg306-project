"use client";

import {useState} from "react";

export default function Movieform({onSubmit}) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Film");

    function handleSubmit(event) {
        event.preventDefault();

        const item = {name, category};
        onSubmit(item);

        setName("");
        setCategory("");
    }

    return (
        <div className=" mt-8 ml-8 w-64 rounded bg-blue-400">
            <h1 className="text-2xl pl-4 font-bold">Add an movie to your list! </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="pt-2 text-center">
                            <label htmlFor="name">Name </label>
                            <input
                                className="text-black border border-black"
                                value={name}
                                type="text"
                                id="name"
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="pt-2 text-center">
                            <label htmlFor = "category">Category </label>
                            <input
                                className="text-black border border-black"
                                value={category}
                                type="text"
                                id="category"
                                onChange={(event) => setCategory(event.target.value)} //This may not work, we'll see. update: it works!
                            />
                        </div>
                    </div>
                    <div className="pt-2 text-center">
                        <button className=" cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-slate-400">Add Film</button>
                    </div>
                </form>
        </div>
    );

}
