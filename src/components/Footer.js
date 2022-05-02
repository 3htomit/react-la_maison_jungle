import { useState } from 'react'
import '../styles/Footer.css'

function checkEmail(value) {
  // console.log(!value.includes('@'))
  if (!value.includes('@')) {
    alert("⚠️ Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
  }
}

function Footer() {
  const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				<p>Pour les passionné·e·s de plantes</p>
        <p>🌿🌱🌵</p>
			</div>
			<div className='lmj-footer-elem'>
        Laissez-nous votre mail :
        <form>
          <input
            type='text'
            name='my_input'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={(e) => checkEmail(e.target.value)}
            ></input>
          <button>Enregistrer</button>
        </form>
      </div>
		</footer>
	)
}

export default Footer
