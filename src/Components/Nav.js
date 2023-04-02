import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { Context } from './Context'

const Nav = () => {

    const {products, tabs} = useContext(Context)
    const [items] = products
    const [active, setActive] = tabs

    const handleActive = (x) => setActive(x)

    const count = items.filter(x=>x.count > 0).reduce((sum, x)=>sum + x.count, 0)
    
    return (
        <nav>
            <Link to='/'>
                <div className={active === 0 ? 'active' : ''} onClick={() => handleActive(0)}>
                    <h3 style={{ fontSize: '30px'}}>Home</h3>
                </div>
            </Link>
            <ul>
                {/* <Link to='/'>
                    <li className={active === 1 ? 'active' : ''} onClick={() => handleActive(1)}>
                        Home
                    </li>
                </Link> */}
                <Link to='/shop'>
                    <li className={active === 2 ? 'active' : ''} onClick={() => handleActive(2)}>
                        Shop
                    </li>
                </Link>
                <Link to='/cart'>
                    <li className={active === 3 ? 'active' : ''} onClick={() => handleActive(3)}>
                        Cart
                        <span style={{ color: 'black', fontSize: '15px', marginLeft: '5px' }}>
                            {count > 0 ? `(${count})` : null}
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav