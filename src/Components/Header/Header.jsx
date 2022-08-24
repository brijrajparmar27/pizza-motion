import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
    const HeaderVariants = {
        hidden: {
            y: -100
        },
        visible: {
            y: 0
        }
    }
    return <motion.div className="header" variants={HeaderVariants} animate='visible' initial="hidden">
        Pizzaria
    </motion.div>
}

export default Header;