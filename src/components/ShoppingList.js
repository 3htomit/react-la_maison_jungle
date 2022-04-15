import { plantList } from "../data/plantList";

function ShoppingList() {
    const categories = plantList.reduce(
      (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
    )

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <h3>Plants</h3>
      <ul>
        {plantList.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
