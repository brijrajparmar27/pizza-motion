import "./Home.css";
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Home = () => {
    let navigate = useNavigate();
    const start = () => {
        navigate("/base");
    }
    const HomeVariants = {
        fonts:{
            fontSize:"50px"
        },
        btnHover:{
            scale:1.1,
            textShadow:"0px 0px 8px rgb(255,255,255)",
            boxShadow:"0px 0px 8px rgb(255,255,255)"
        },
        exit:{
            x: '-100vw',
            transition:{
                diration:5
            }
        }
    }
    return <motion.div className="home" variants={HomeVariants}  exit='exit' initial={{}} animate={{}}>
        <motion.h2 className="home_title" variants={HomeVariants} animate="fonts">Start Creating<br />Your Custom<br />PIZZA</motion.h2>
        <motion.button className="create_btn" onClick={start} variants={HomeVariants} whileHover="btnHover">
            Create
        </motion.button>
    </motion.div>
}
export default Home;