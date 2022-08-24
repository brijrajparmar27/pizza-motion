import { useNavigate } from "react-router-dom";
import usePizza from "../../Hooks/usePizza";
import {motion} from "framer-motion";
import "./Toppings.css";
import { useState } from "react";

const Toppings = () => {
    let toppings = ['Mushrooms', 'Peppers', 'Onions', 'Olives', 'Extra Cheese', 'Tomatoes'];
    let selected = false;
    let [allowNext,setAllowNext] = useState(false);
    let { pizza, setPizza } = usePizza();
    const navigate = useNavigate();

    const toppingsVariants = {
        btnHover: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
        },
        hidden: {
            x: '100%', opacity: 0
        },
        visible: {
            x: 0, opacity: 1,
            transition: {
                delay: 0.3
            }
        },
        textHover: {
            scale: 1.3, color: '#f8e112', originX: 0
        },
        btnHidden: {
            y: "100%",
            opacity: 0
        },
        btnVisible: {
            y: 0,
            opacity: 1
        }
    }

    const next = () => {
        navigate("/order");
    }
    const addToppings = (topping) => {
        let newToppings;
        setPizza(prev => {
            if (prev.toppings.includes(topping)) {
                newToppings = prev.toppings.filter(
                    (each) => {
                        return each !== topping
                    }
                )
            }
            else {
                newToppings = [...prev.toppings, topping];
            }
            setAllowNext(true);
            return({ ...prev, toppings: newToppings });
        })
    }
    return <div className="toppings_contain">
        <motion.div className="toppings" variants={toppingsVariants} animate='visible' initial='hidden'>
            <div className="section_title">
                Step 1 : Choose Your toppings
                <hr />
            </div>
            <ol>
                {
                    toppings.map((topping, index) => {
                        selected = pizza.toppings.includes(topping);
                        return <motion.li key={index} onClick={() => { addToppings(topping) }} variants={toppingsVariants} whileHover='textHover'>{selected && "> "}{topping}</motion.li>
                    })
                }
            </ol>
            {allowNext && <motion.button className="next_btn" onClick={next}  variants={toppingsVariants} animate='btnVisible' initial='btnHidden' whileHover='btnHover'>
                Order
            </motion.button>}
        </motion.div>
    </div>
}

export default Toppings;