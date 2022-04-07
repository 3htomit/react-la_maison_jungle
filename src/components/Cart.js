import '../styles/Cart.css';

function Cart() {
  const plant1 = "Monstera"
  const price1 = 8
  const plant2 = "Lierre"
  const price2 = 10
  const plant3 = "Bouquet de fleurs"
  const price3 = 15
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>{plant1} à {price1},00 €</li>
        <li>{plant2} à {price2},00 €</li>
        <li>{plant3} à {price3},00 €</li>
      </ul>
      <p>Total = {price1 + price2 + price3},00 €</p>
    </div>
  )
}

export default Cart
