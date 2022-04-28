import '../styles/PlantTags.css'

function PlantTags({best}) {
  return (best && <div className='lmj-plant-tags'>🔥</div>)
  // if (plant.isBestSale && plant.isSpecialOffer) {
  //   return <div className='lmj-sales'>soldes + 🔥</div>
  // } else if (plant.isBestSale) {
  //   return
  // } else if (plant.isSpecialOffer) {
  //   return <div className='lmj-sales'>soldes</div>
  // };
  // Other solution:
    // return ((plant.isBestSale && plant.isSpecialOffer) && <div className='lmj-sales'>soldes + 🔥</div>
    // || (plant.isBestSale) && <div className='lmj-sales'>🔥</div>
    // || (plant.isSpecialOffer) && <div className='lmj-sales'>soldes</div>);
}

export default PlantTags
