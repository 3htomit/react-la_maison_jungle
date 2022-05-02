import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(true)

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			<div>Monstera : {monsteraPrice}€</div>
      <div className='itemButtons'>
        <button onClick={() => updateCart(cart + 1)}>➕</button>
        <button onClick={() => updateCart(cart - 1)}>➖</button>
        <button onClick={() => updateCart(0)}>❌</button>
      </div>
			<h3>Total : {monsteraPrice * cart}€</h3>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
