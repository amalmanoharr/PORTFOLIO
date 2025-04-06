import aws from "../assets/awscloud.png";
import gcp from "../assets/gcpcloud.png";
import {motion} from "framer-motion";
const Achievements = () => {
    return (
        <section id="certifications" className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2 whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}} className="my-20 text-center text-white text-4xl">Achievements</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* AWS Certification Card */}
                    <motion.div whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}} className=" shadow-md rounded-lg p-6 flex items-start space-x-4">
                        <img src={aws} alt="AWS Certified Cloud Practitioner Logo" className="h-12 w-12 object-contain" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">AWS Certified Cloud Practitioner</h3>
                            <p className="text-white">Amazon Web Services (AWS)</p>
                            <p className="text-sm text-white mt-1">Issued: Jan 2024</p>
                            <a href="https://www.credly.com/badges/9c635d43-db40-4437-b693-6743fd473640/linked_in_profile" target="_blank" className="text-blue-600 hover:underline text-sm font-medium mt-2 inline-block">View Credential</a>
                        </div>
                    </motion.div>
                    {/* GCP Certification Card */}
                    <motion.div  whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}} className=" shadow-md rounded-lg p-6 flex items-start space-x-4">
                        <img src={gcp} alt="Google Associate Cloud Developer Logo" className="h-12 w-12 object-contain" />
                        <div>
                            <h3 className="text-xl font-semibold text-white">GCP Certified Associate Cloud Engineer</h3>
                            <p className="text-white">Google Cloud Platform (GCP)</p>
                            <p className="text-sm text-white mt-1">Issued: Nov 2023</p>
                            <a href="https://google.accredible.com/65fd2f66-fe84-4b76-984a-8fd5d1bb92b4#acc.YXvONb0D" target="_blank" className="text-blue-600 hover:underline text-sm font-medium mt-2 inline-block">View Credential</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
