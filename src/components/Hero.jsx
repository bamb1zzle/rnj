import styles from "../style";
import { kaiju, notification } from "../assets";
import ReadNow from "./ReadNow";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={notification} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">4 New Reads</span> Waiting for You{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Kaiju No. 8 <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <Button/>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[20px] text-[52px] text-white ss:leading-[52.8px] leading-[75px] w-full">
          Recommendation of the Week
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Kafka Hibino is a 32-year-old member of the Professional Kaiju Cleanup Corp. His job as a Monster Sweeper is to chop up and dispose of Kaiju killed by the Defense Force. However, his original goal was to be apart of that Defence Force and help protect Japan. <br /> <br />Following a chain of unfortunate events, Kafka encounters a parasite-type kaijuu that forces its way in through his mouth—turning him into a humanoid monster. With his newfound powers, Kafka aims to give his lifelong dream a final try.
        </p>

        <br></br>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Author: Naoya Matsumoto <br />Artist: Naoya Matsuomoto<br /> Release Year: 2020 <br className="sm:block hidden" />{" "}
          </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={kaiju} alt="kaiju" className="w-[90%] h-[95%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
