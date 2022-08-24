import { createContext, useState } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
    const [pizza, setPizza] = useState({ base: "", toppings: [] })
    return <PizzaContext.Provider value={{ pizza, setPizza }}>
        {children}
    </PizzaContext.Provider>
}