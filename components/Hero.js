import BigButton from "./BigButton";
import Flex from "./Flex";

const Hero = () => {
  return (
    <div className="bg-gradient min-h-screen" id="hero">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <div className="mt-[6rem] lg:mt-0">
          <h1 className="h1">
            You have Idea! <br />
            We have Solutions
          </h1>
          <p className="text-[1.125rem] my-8 max-w-[31rem]">
            Synerdea serves as an expert in data-driven research and provides
            modernization & visibility to your business.
          </p>
          <a href="#get-started">
            <BigButton />
          </a>
        </div>
        <div className="">
          <img src="/images/hero.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
