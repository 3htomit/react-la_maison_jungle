function Cart() {
  const plant1 = "Monstera"
  const price1 = 8
  const plant2 = "Lierre"
  const price2 = 10
  const plant3 = "Bouquet de fleurs"
  const price3 = 15
  return (
    <div class="cart">
      <h4>Panier</h4>
      <ul>
        <li>{plant1} ({price1},00 €)</li>
        <li>{plant2} ({price2},00 €)</li>
        <li>{plant3} ({price3},00 €)</li>
        <li>Total = {price1 + price2 + price3},00 €</li>
      </ul>
    </div>
  )
}

export default Cart
