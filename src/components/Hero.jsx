import profilepic from "../assets/amalpic.jpg"
import {motion} from "framer-motion";
import {HERO_CONTENT} from "../constants";
const containerVariants = {
    hidden:{
        opacity:0,x:-100
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5,
            staggerChildren:0.2,
        }
    }
}
const childVariants = {
    hidden:{
        opacity:0,x:-100
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:0.5
        }
    }
}
const Hero = () =>{
    return(
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
                        <motion.img src={profilepic} 
                        alt="Amal Manohar" 
                        className="border border-stone-900 rounded-3xl h-full object-cover max-h=[500px] w-650 h-650" 
                        initial={{x:100,opacity:0}} 
                        animate={{x:0,opacity:1}} 
                        transition={{duration:0.2,delay:0.5}}/>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div className="flex flex-col items-center lg:items-start mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants} >
                        <motion.h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-gray-200" variants={childVariants}>Amal Manohar</motion.h2>
                        <motion.span className=" bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent" variants={childVariants}>Full Stack Developer</motion.span>
                    <motion.p className="my-2 text-stone-300 max-w-lg py-6 text-lg leading-relaxed tracking-tighter" variants={childVariants}>{HERO_CONTENT}</motion.p>
                    <motion.a href="/resume.pdf" target="_blank" rel="noopener no referrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10" variants={childVariants}>Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
        
    )
}
export default Hero