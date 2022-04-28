function CareScale({scaleValue, careType}) {
  const scaleType = careType === 'light' ? '🟡' : '💧';
  return <div>{scaleType.repeat(scaleValue)}</div>;
}

export default CareScale
