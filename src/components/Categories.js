import { plantList } from '../data/plantList'
import '../styles/Categories.css'

function Categories({ activeCategory, setActiveCategory }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

  function filterPlants(event) {
    setActiveCategory(event.target.value);
  }

  return (
    <div className='lmj-categories'>
      <h4>Catégories</h4>
      <select
        onChange={(e) => filterPlants(e)}
        className='lmj-categories-select'>
        <option key='all' value=''>Toutes</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}

export default Categories
