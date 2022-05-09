function CareScale({scaleValue, careType}) {
  const scaleType = careType === 'light' ? '🟡' : '💧';
  return <div onClick={() => careDetails({value: scaleValue, type: careType})}>{scaleType.repeat(scaleValue)}</div>;
}

function careDetails({value, type}) {
  const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
  }
  alert(`Cette plante requiert ${quantityLabel[value]} ${
    type === 'light' ? "de lumière" : "d'eau"
  }`)
}

export default CareScale
