import usePizza from "../../Hooks/usePizza";
import { motion } from "framer-motion";
import "./Order.css";
const Order = () => {
    const { pizza } = usePizza();
    const orderVariants = {
        hidden: {
            x: '100%', opacity: 0
        },
        visible: {
            x: 0, opacity: 1,
            transition: {
                delay: 0.3,
                type: 'spring',
                mass:0.4,
                damping:8,
                when: "beforeChildren",
                staggerChildren:0.5
            }
        },
    }
    const orderdetailsVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
        },
    }
    return <div className="order_contain">
        <motion.div className="order" variants={orderVariants} initial='hidden' animate='visible'>
            <h2>Thankyou For your Order</h2>
            <h4>Your Order Contains The Following</h4>
            <div className="reciept">

                <motion.div variants={orderdetailsVariants}>
                    <h4>Base</h4>
                    <h3>{pizza.base}</h3>
                </motion.div>

                <motion.div variants={orderdetailsVariants}>
                    <h4>Toppings</h4>
                    {
                        pizza.toppings.map((each, index) => {
                            return <h3 key={index}>{each}</h3>
                        })
                    }
                </motion.div>

            </div>
        </motion.div>
    </div>
}

export default Order;