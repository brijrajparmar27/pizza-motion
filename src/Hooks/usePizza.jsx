import { useContext, useEffect } from "react"
import { PizzaContext } from "../Context/PizzaContext"

const usePizza = () => {
    const { pizza, setPizza } = useContext(PizzaContext);
    useEffect(() => {
        console.log(pizza);
    }, [pizza])
    return { pizza, setPizza }
}

export default usePizza;