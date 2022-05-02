import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList({cart, updateCart}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div>
            <PlantItem
              key={id}
              cover={cover}
              name={name}
              water={water}
              light={light}
              // cart={cart}
              // updateCart={updateCart}
              />
              <button onClick={() => updateCart(cart + 1)}>➕</button>
          </div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
