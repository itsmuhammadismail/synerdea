import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const GrowingBusiness = () => {
  return (
    <div className="min-h-screen" id="business">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="left">
          <div className="">
            <h2 className="h2">For Growing Businesses</h2>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              Run your growing E-Commerce Business with synerdea tango & one
              app. Deliver anywhere and everywhere using Our built in
              integration with up to eight different domestic delivery partners.
              Track your orders in real time. Use synerdea Rider App to allocate
              and deliver shipments using your own riders. It’s all there. Use
              integratedhyperlocal delivery services to deliver your orders on
              the same day and in real-time.
            </p>
            <a href="#get-started">
              <BigButton />
            </a>
          </div>
        </Fade>
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
