import { CONTACT } from "../constants";
import {motion} from "framer-motion";
const Contact = () =>{
    return(
        <div className="border-t border-stone-900 pb-20">
           <motion.h2 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:0.5}}
           className="my-10 text-center text-white text-4xl">
            Get in Touch
            </motion.h2>
           <div className="text-center tracking-tighter bg-gradient-to-r from-stone-300 to-stone-300 bg-clip-text text-transparent">
            
            <p
            className="my-4">
                {CONTACT.phoneNo}
            </p>
            <a href="#" className="border-b">
                {CONTACT.email}
            </a>
           </div>
        </div>
     
     )
}
export default Contact;