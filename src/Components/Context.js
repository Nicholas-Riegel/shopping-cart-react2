import { useState, createContext, useEffect } from 'react'
import itemsArray from '../Assets/data';


export const Context = createContext()

export const ContextFunction = (x) => {

    const [items, setItems] = useState([])
    const [active, setActive] = useState(0)

    // set the below up in different file and fill out
    // const altResult = [{
    //     title: "Hello world",
    //     price: 1.75,
    // }]

    useEffect(
        () => {
            // fetch('https://fakestoreapi.com/products')
            // .then(response => {
            //     if (response.ok) {
            //         return response.json();
            //     }
            //     return Promise.reject(response);
            // })
            // .then(result => setItems(result.map(x => ({ ...x, count: 0 }))))
            // .catch(error => {
            //     console.log('Something went wrong.', error)
            //     setItems(altResult.map((x) => ({ ...x, count: 0 })));
            // })
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