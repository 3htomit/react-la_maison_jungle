function CareScale({scaleValue, careType}) {
  const scaleType = careType === 'light' ? '🟡' : '💧';
  const wordType = careType === 'light' ? "de lumière" : "d'eau";
  let wordValue = ''
  if (scaleValue === 1) {
    wordValue = "peu"
  } else if (scaleValue === 2) {
    wordValue = "modérément"
  } else {
    wordValue = "beaucoup"
  }

  return <div onClick={() => careDetails({value: wordValue, type: wordType})}>{scaleType.repeat(scaleValue)}</div>;
}

function careDetails({value, type}) {
  // console.log(value + ' ' + type);
  alert(`Cette plante requiert ${value} ${type}`)
}

export default CareScale
