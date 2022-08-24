import "./Base.css";
import { useNavigate } from 'react-router-dom';
import usePizza from "../../Hooks/usePizza";
import { motion } from "framer-motion";
import { useState } from "react";

const Base = () => {
    let navigate = useNavigate();
    let { pizza, setPizza } = usePizza();
    let [allowNext, setAllowNext] = useState(false);
    let bases = ["Classic", "Thin and Crispy", "Thick Crust"];
    let selected = false;

    const baseVariants = {
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

    const start = () => {
        allowNext && navigate("/toppings");
    }

    const selectBase = (base) => {
        setPizza((prev) => {
            return { ...prev, base: base };
        });
        setAllowNext(true);
    }
    return <div className="base_contain">
        <motion.div className="base" variants={baseVariants} animate='visible' initial='hidden'>
            <div className="section_title">
                Step 1 : Choose Your Base
                <hr />
            </div>
            <ol>
                {
                    bases.map((base, index) => {
                        selected = pizza.base == base ? true : false;

                        return <motion.li key={index} onClick={() => { selectBase(base) }} whileHover='textHover' variants={baseVariants}>{selected && "> "}{base}</motion.li>
                    })
                }
            </ol>
            {allowNext && <motion.button className="next_btn" onClick={start} variants={baseVariants} animate='btnVisible' initial='btnHidden' whileHover='btnHover'>
                Next
            </motion.button>}
        </motion.div>
    </div>
}

export default Base;