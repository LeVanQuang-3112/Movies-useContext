import { createContext } from 'react'
import ProductsAPI from './common/ProductAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    
    const state = {
        productsAPI: ProductsAPI(),
    }
    return (
        <GlobalState.Provider value={state}>
               {children}
        </GlobalState.Provider>
            
    )
}
