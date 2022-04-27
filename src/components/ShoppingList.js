import { plantList } from "../data/plantList";
import '../styles/ShoppingList.css';
import PlantItem from './PlantItem';

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
      <ul className='lmj-plant-list'>
        {plantList.map(({name, cover, id, isBestSale, light, water}) => (
          <PlantItem name={name} cover={cover} id={id} best={isBestSale} light={light} water={water} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
