import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const EnterpriseScale = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen" id="enterprise">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="up">
          <div className="order-2 lg:order-1">
            <img src="/images/startups.svg" alt="" />
          </div>
        </Fade>
        <Fade direction="right">
          <div className="order-1 lg:order-2">
            <h2 className="h2">For Enterprise Scale E-Commerce</h2>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              Run your Enterprise E-Commerce Business with synerdea OMS. Connect
              more than one E-Commerce Sites and platforms with synerdea and
              manage your fulfillment from one central dashboard. Distribute
              shipments to multiple 3PLs in real time using rule based protocols
              and performance KPIs. Create accounts for your contact center
              agents allowing them to make calls using our web based soft phone
              and browser plugin. Integrate your brick and mortar store with
              synerdea POS and your warehouse with synerdea WMS.
            </p>
            <a href="#get-started">
              <BigButton />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default EnterpriseScale;
