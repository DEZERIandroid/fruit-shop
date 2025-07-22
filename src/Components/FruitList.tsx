import useFruitList from '../hooks/useFruitList'
import '/src/App.css'


const FruitList = () => {
    const {sortOrder,modals,setSearchTem,addToCart,sortPrice,Fruts} = useFruitList()
    
  return (
    <div>
        <div className="options-buttons">
            <button onClick={sortPrice} className="fruit-sort-button">{sortOrder === "verh" ? "Цена ↑​​" : "Цена ↓"}</button>    
            <input type="text" placeholder='Найти фрукт...'
                   onChange={(e) => setSearchTem(e.target.value)}
            />
        </div>
        <div className='fruits'>
            {Fruts.map((item,index) => (
                <ul className='fruit-ul' key={index}>
                    <li >
                        <div style={{color:item.color}}  className="fruit-name">{item.name}</div>
                        <div className="fruit-price">{item.price} Р</div>
                        <button onClick={() => addToCart(item)} className='button-addToCart'>В корзину</button>
                        {item.id === 2 && <div className='skidka-banana'><s>80 Р</s></div>}
                        {item.id === 8 && <div className='novinka'>Новинка!</div>}
                    </li>
                </ul>
            ))}
        </div>
        <div className='modal-container'>
            {modals.map(modal => (
                <div key={modal.id} className='modal'>
                    {modal.message}
                </div>
            ))}
        </div>
    </div>
  )
}

export default FruitList


