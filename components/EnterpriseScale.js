import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const EnterpriseScale = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen" id="enterprise">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="up">
          <div className="order-2 lg:order-1">
            <img src="/images/enterprise.svg" alt="" />
          </div>
        </Fade>
        <Fade direction="right">
          <div className="order-1 lg:order-2">
            <h2 className="h2">Enterprise</h2>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              We serve Enterprises looking to transform their applications for
              their most critical workload. If your already on your digital
              journey than we can help you scale it for growth markets including
              (IoT, blockchain, artificial intelligence [AI], Big Data, etc.) or
              technology upgrade with significant legacy technology footprints
              to open source or cloud integration or devOps integration.
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
