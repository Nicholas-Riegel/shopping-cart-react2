import { useState, createContext, useEffect } from 'react'
import itemsArray from '../Assets/data';


export const Context = createContext()

export const ContextFunction = (x) => {

    const [items, setItems] = useState([])
    const [active, setActive] = useState(0)

    useEffect(
        () => {
            setItems(itemsArray.map((x) => ({ ...x, count: 0 })));
        },
        []
    )

    return (
        <Context.Provider value={{products: [items, setItems], tabs: [active, setActive]}}>
            {x.children}
        </Context.Provider>
    )
}