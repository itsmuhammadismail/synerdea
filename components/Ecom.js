import { Fade } from "react-awesome-reveal";

const Ecom = () => {
  return (
    <div className="bg-white min-h-screen" id="services">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="left">
        <div className="">
          <h2 className="h2">
            We&apos;ve got everything your <br />
            E-Commerce Store needs
          </h2>
          <p className="my-8 max-w-[25rem] text-[1.125rem] ">
            Recent surveys have indicated that small businesses recognise the
            need they have to connect with consumer.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                Store Creation
              </div>
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                UI/UX Design
              </div>
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                App Development
              </div>
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                Order Confirmation
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                Process Automation
              </div>
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                Store Management
              </div>
              <div className="flex gap-3">
                <img src="/images/bullet.svg" />
                Plugin Integration
              </div>
            </div>
          </div>
        </div>
        </Fade>
        <Fade direction="up">
        <div className="">
          <img src="/images/ecom.svg" alt="" />
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Ecom;
