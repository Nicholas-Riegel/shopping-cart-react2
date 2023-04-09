import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import { useContext, useEffect } from 'react'

import { ContextFunction, Context } from './Context'
import Nav from './Nav'
import Shop from './Shop'
import Cart from './Cart'

const Home = () => {
    
    // const {tabs} = useContext(Context)
    // const [active, setActive] = tabs

    // useEffect(() => setActive(1), [])
    
    return (
        <div className='home_div'>
            <h1 className='text-indigo-500'>Welcome to the Thing Shop</h1>
        </div >
    )
}

const App = () => (
    <ContextFunction>
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/cart' component={Cart} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    </ContextFunction>
)

export default App

// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }