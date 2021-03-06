import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="bg-gradient min-h-screen" id="hero">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="left">
          <div className="mt-[6rem] lg:mt-0">
            <h1 className="h1">
              You have Idea! <br />
              We have Solutions
            </h1>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              Provided useful and data-driven research to modernize the company
              outlook. Our goal lies with in implementation of technology to
              reduces costs and build efficiency within your organization.
            </p>
            <a href="#get-started">
              <BigButton />
            </a>
          </div>
        </Fade>
        <Fade direction="up">
          <div className="">
            <img src="/images/hero.svg" alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
