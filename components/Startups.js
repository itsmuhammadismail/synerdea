import BigButton from "./BigButton";
import Flex from "./Flex";

const Startups = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <div className="order-2 lg:order-1">
          <img src="/images/startups.svg" alt="" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="h2">For Startups</h2>
          <p className="text-[1.125rem] my-8 max-w-[31rem]">
            Supercharge your Small Business with E-Commerce Services from
            synerdea. Let us create and manage your E-Commerce Landing Page for
            you. Get one click order confirmation with our SMS and Robocall
            Feature. Start shipping in seconds with our built in Shipping
            Solution, no time consuming rate negotiation or API integration
            required.
          </p>
          <BigButton />
        </div>
      </div>
    </div>
  );
};

export default Startups;
