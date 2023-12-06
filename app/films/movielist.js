import Item from "./item.js";

export default function Itemlist({items, onDelete}){
    function handleDelete(name) {
        onDelete(name);
    }

    return (
        <div className="block mb-4">
            <h1 className="text-2xl font-bold mt-8 mb-8 ml-8">Groceries</h1>
                {items.map((item, index) => (
                    <div className="ml-8" key={index}>
                        <Item name={item.name} quantity={item.quantity} category={item.category} onDelete={handleDelete} />
                    </div>
                ))}
        </div>
    )
}