import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"


const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            

            <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our streamlined billing process ensures accuracy and efficiency for every transaction, enhancing customer satisfaction and trust, and simplifying financial management. Additionally, our card deals offer competitive rates and exclusive benefits.</p>
            <Button styles="mt-10" />
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[97%] h-[97%]" />
        </div>

    </section>
)


export default CardDeal