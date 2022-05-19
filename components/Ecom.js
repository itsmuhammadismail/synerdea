import { Fade } from "react-awesome-reveal";
import Store from "./Store";

const Ecom = () => {
  return (
    <div className="bg-linear min-h-screen" id="services">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8  lg:py-4 flex flex-col justify-center gap-8 items-center">
        <div className="w-full flex flex-wrap gap-[2rem] mt-[6rem] items-end card-center">
          <Fade direction="left">
            <div className="flex-1 px-[2.5rem]">
              <h2 className="h2">
                We&apos;ve got everything
                <br />
                you need
              </h2>
              <p className="my-8 max-w-[28rem] text-[1.125rem] ">
                Deeply skilled in all aspects of current and emerging
                technologies, our experts advise and work with you to ensure
                every application and service can be deployed and managed where
                it makes the most sense. With our exclusive tools and assets,
                you can accelerate the transform of your IT application &
                infrastructure. We’ll work with you to incorporate intelligent
                insights, automation and integration within your cloud provider
                ecosystems.
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <Store
              heading="Analytical Solutions"
              para="We have lead Business analytics software tools implementations, that provide methodical exploration of data to help businesses make better, data-driven decisions by focusing on identifying operational, day-to-day insights through data analytics to find trends, key drivers and areas of improvement."
              img="/images/store/analytical.svg"
            />
          </Fade>
        </div>
        <div className="w-full flex flex-wrap gap-[2rem] card-center">
          <Fade direction="left">
            <Store
              heading="UI/UX Design"
              para="We cover a vast array of verticals & stack and are happy to deliver top of the art designs for your product with enhanced user experience, among other advantages that include cost effectiveness and time without compromising the outcome."
              img="/images/store/ui.svg"
            />
          </Fade>
          <Fade direction="right">
            <Store
              heading="App Development"
              para="Build and transform your business through strategy, design and app development. Our Mantra, Good design is good design, and good code is good code. Being good at what we do allow us to working across multiple verticals and and industries with ease"
              img="/images/store/app.svg"
            />
          </Fade>
        </div>
        <div className="w-full flex-wrap flex gap-[2rem] card-center">
          <Fade direction="left">
            <Store
              heading="Infrastructure"
              para="We are known to provide flexible computing and storage options for data. Business data, workloads, and applications that have different needs, and our solution will help you implement the best possible solution including public cloud or private cloud or Hybrid mechanism."
              img="/images/store/infrastructure.svg"
            />
          </Fade>
          <Fade direction="right">
            <Store
              heading="Process Automation"
              para="We are at par with the emerging technologies of user-programmed automation software solution that include process mining functionality, in bot capability used to setup simplistic job and incorporates AI and ML as required."
              img="/images/store/process.svg"
            />
          </Fade>
        </div>
        <div className="w-full flex-wrap flex gap-[2rem] mb-[6rem] card-center">
          <Fade direction="left">
            <Store
              heading="Cloud ERP"
              para="Specializing in the Implementation of ERP’s in Manufacturing and Distribution sectors, including implementation/configuration of off-market products including Salesforce, Oracle, Microsoft Dynamics or home grown generic solutions."
              img="/images/store/erp.svg"
            />
          </Fade>
          <Fade direction="right">
            <Store
              heading="Plugin Integration"
              para="Run a successful website just like Amazon, eBay, or Flipkart then, you’ll need a good marketplace plugin. We can help with selection of the best marketplace plugin including Magento, Shopify, and WooCommerce to best suit your need."
              img="/images/store/plugin.svg"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Ecom;
