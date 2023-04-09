import { useContext, useLayoutEffect, useEffect} from 'react'
import { Context } from './Context'

const Cart = () => {

  const {products, tabs} = useContext(Context)
  const [items, setItems] = products
  const [active, setActive] = tabs

  const cartList = items.filter(x => x.count > 0)

  useEffect(() => setActive(3), [])

  useLayoutEffect(() => window.scrollTo(0, 0), [])

  return (
    <div className="cart_div text-indigo-500">
      {cartList.map((x, i) => (
        <div
          key={i}
          className="item_cart_div border-none"
          style={{ paddingRight: '20px' }}
        >
          <div className="title_div">
            <h3>{x.title}</h3>
            <img
              src={
                `${process.env.PUBLIC_URL}/pictures/` + x.image
              }
              alt={x.title}
              style={{ height: '50px', marginTop: '10px' }}
              className='rounded'
            />
          </div>
          <div className="wrap_price_divs">
            <p className="price_add">Price: ${x.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            <p className="price_add">Quantity:</p>
            <div className="buttons_div">
              <button
                className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded h-auto flex items-center justify-center border-none"
                onClick={() => setItems(items.map((y) => y.id === x.id ? {...y,count: y.count === '' ? 1 : y.count + 1} : y))}
              >
                +
              </button>
              <input
                type="text"
                value={x.count}
                className="bg-indigo-400 text-white font-bold py-2 px-2 rounded flex items-center justify-center border-none w-11"
                onChange={(e) => setItems(items.map((y) => y.id === x.id ? {...y, count: parseInt(e.target.value) || e.target.value === '0' ? parseInt(e.target.value) : ''} : y))}
              />
              <button
                className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center border-none"
                onClick={() => setItems(items.map((y) => y.id === x.id && y.count > 0 ? {...y, count: (y.count -= 1)} : y))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="checkout_div border-none">
        <h3>
          Total: ${items.filter((x) => x.count > 0).reduce((sum, x) => sum + x.count * x.price, 0).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart