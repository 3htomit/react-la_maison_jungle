import PlantTags from './PlantTags';
import CareScale from './CareScale';
import '../styles/PlantItem.css'

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({name, cover, id, best, light, water}) {
  return (
    <li key={id} class='lmj-plant-item' onClick={() => handleClick(name)}>
      <PlantTags best={best} />
      <img src={cover} alt='Plant' className='lmj-plant-item-cover' />
      {capitalize(name)}
      <div>
        <CareScale careType='light' scaleValue={light} />
        <CareScale careType='water' scaleValue={water} />
      </div>
    </li>
  )
}

export default PlantItem
