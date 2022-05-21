import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const GrowingBusiness = () => {
  return (
    <div className="min-h-screen" id="business">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <div className="order-2 lg:order-[0]">
          <Fade direction="left">
            <h2 className="h2">Growing Businesses</h2>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              Challenges with scaling your venture including capturing
              efficiency in operations and management or better support and
              access for a distributed workforce or Integration/upgrade of new
              tech stack. We are there to help you perform these migrations in a
              controlled environment so that scaling can be done smoothly.
            </p>
            <a href="#get-started">
              <BigButton />
            </a>
          </Fade>
        </div>
        <Fade direction="up">
          <div className="">
            <img src="/images/business.svg" alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default GrowingBusiness;
