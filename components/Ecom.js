import { Fade } from "react-awesome-reveal";
import Store from "./Store";

const Ecom = () => {
  return (
    <div className="bg-linear min-h-screen" id="services">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8  lg:py-4 flex flex-col justify-center gap-8 items-center">
        {/* <Fade direction="left">
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
        <Fade direction="right">
          <div className="">
            <img src="/images/ecom.svg" alt="" />
          </div>
        </Fade> */}
        <div className="w-full flex flex-wrap gap-[2rem] mt-[6rem] items-end">
          <div className="flex-1 px-[2.5rem]">
            <h2 className="h2">
              We&apos;ve got everything your <br />
              E-Commerce Store needs
            </h2>
            <p className="my-8 max-w-[28rem] text-[1.125rem] ">
              Recent surveys have indicated that small businesses recognise the
              need they have to connect with consumer.
            </p>
          </div>
          <Store
            heading="Store Creation"
            para="Your users can create groups to let other users to join and talk"
            img="/images/store/store.svg"
          />
        </div>
        <div className="w-full flex flex-wrap gap-[2rem]">
          <Store
            heading="UI/UX Design"
            para="Members, Friends Connection ( like followers ), Private Message"
            img="/images/store/ui.svg"
          />
          <Store
            heading="App Development"
            para="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
            img="/images/store/app.svg"
          />
        </div>
        <div className="w-full flex-wrap flex gap-[2rem]">
          <Store
            heading="Order Confirmation"
            para="Forum is ready by BBPress. Your users can make topics and talk."
            img="/images/store/order.svg"
          />
          <Store
            heading="Process Automation"
            para="8 different scroll effects are ready.
            You can always change by your tastes."
            img="/images/store/process.svg"
          />
        </div>
        <div className="w-full flex-wrap flex gap-[2rem] mb-[6rem]">
          <Store
            heading="Store Management"
            para="Members, Groups list can be modified by drag & drop live builder."
            img="/images/store/store_man.svg"
          />
          <Store
            heading="Plugin Integration"
            para="8 different scroll effects are ready.
            You can always change by your tastes."
            img="/images/store/plugin.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Ecom;
