import React, { forwardRef } from 'react';
import {IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill} from "react-icons/io5";
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';


const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:.2
        }
    }
}


const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:630,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:630,borderRadius:"100%"
    },
}



const Card = forwardRef((props, ref) => (
    <motion.div className="service_container" id="services" ref={ref}>
        <div className="title_wrapper">
            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >Our Services</motion.span>
            <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
            >Save Time Managing Social Media<br/>For Your Business.</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.375rem"}}>
                        <IoMailOutline/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Ui/Ux Design<br/>For Mobile & Web</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#5700cf", size:"1.375rem"}}>
                        <IoApps/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Web & Mobile<br/>App Development</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"1.375rem"}}>
                        <IoColorFill/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Illustration Design<br/>(Flat, 3d & More)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffe1e9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#fa3970", size:"1.375rem"}}>
                        <IoNotifications/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Stratagy & Product<br/>Management</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dcedff"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#56a8f4", size:"1.375rem"}}>
                        <IoNewspaper/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Custome Wordpress<br/>Design & Dev.</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dbf9ed"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#06d786", size:"1.375rem"}}>
                        <IoPieChart/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Digital Marketing<br/>& Management</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#fffada"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#f1df11", size:"1.375rem"}}>
                        <IoCard/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Branding Design<br/>(Logo & Packaging)</h3>
                <a href="#">
                    <span>learn more</span>
                    <IconContext.Provider value={{color:"#14da8f", size:"1.125rem"}}>
                        <IoChevronForward/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card dark" variants={item}>
                <img src={process.env.PUBLIC_URL + '/images/line.png'} alt="line" className="line"/>               
                <h2>+4 <br/>More...</h2>
                <a href="#">
                    <span>View more...</span>
                    <motion.span className="service_icon" style={{backgroundColor:"#14da8f"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#fff", size:"1.125rem"}}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </motion.span>
                </a>
            </motion.div>
        </motion.div>

    </motion.div>
))


export default Card;



//thanks for watching
//please subscribe my channel..........