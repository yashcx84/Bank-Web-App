import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        <div className=" w-full flex justify-around items-center md:flex-row sm:mb-16 mb-6 relative z-[1]">
            <h1 className={styles.heading2}>Honest Reviews<br className="sm:block hidden" /> from Valued Clients
            </h1>
            <div className="w-full md:mt-0 mt-6 mx-[80px] flex justify-end">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Our global payment solutions ensure seamless transactions across borders, providing secure and efficient services for international clients.
                </p>

            </div>


        </div>
        <div className="flex flex-wrap sm:justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)


export default Testimonials