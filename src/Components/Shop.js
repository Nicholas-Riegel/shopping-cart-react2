import { useContext, useLayoutEffect, useEffect } from 'react'
import { Context } from './Context'

const Shop = () => {
    
  const {products, tabs} = useContext(Context)
  const [items, setItems] = products
  const [active, setActive] = tabs
  
  useEffect(() => setActive(2), [])

  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="shop_div text-indigo-500">
      {items.map((x, i) => (
        <div key={i} className="item_div">
          <div className="title_div">
            <h1 className='text-lg font-bold'>{x.title}</h1>
            <img
                src={`${process.env.PUBLIC_URL}/pictures/` + x.image}
                alt={x.title}
                className="rounded-lg"
            />
        </div>
        <div className="wrap_price_divs">
            <p className="price_add font-bold">Price: ${x.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            <p className="price_add font-bold">Add to Cart:</p>
            <div className="buttons_div">
                <button
                    className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center border-none"
                    onClick={() =>setItems(items.map((y) => y.id === x.id ? {...y,count: y.count === '' ? 1 : y.count + 1} : y))}
                >
                    +
                </button>
                <input
                    type="text"
                    value={x.count}
                    style={{ height: '2.8rem', width: '2.8rem' }}
                    className="bg-indigo-400 text-white font-bold rounded py-2 px-2"
                    onChange={(e) => setItems(items.map((y) => y.id === x.id ? {...y, count: parseInt(e.target.value) || e.target.value === '0' ? parseInt(e.target.value) : '',} : y))}
                />
                <button
                  className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center border-none"
                  onClick={() => setItems(items.map((y) => y.id === x.id && y.count > 0 ? { ...y, count: (y.count -= 1) } : y))}
                >
                -
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop