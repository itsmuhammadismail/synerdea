import BigButton from "./BigButton";
import { Fade } from "react-awesome-reveal";

const Startups = () => {
  return (
    <div className="bg-[#FBFBFB] min-h-screen" id="startups">
      <div className="max-w-[80rem] mx-auto min-h-screen px-8 py-16 lg:py-4 flex flex-col lg:flex-row justify-center gap-12 lg:justify-between items-center">
        <Fade direction="up">
          <div className="order-2 lg:order-1">
            <img src="/images/startups.svg" alt="" />
          </div>
        </Fade>
        <Fade direction="right">
          <div className="order-1 lg:order-2">
            <h2 className="h2">Startups</h2>
            <p className="text-[1.125rem] my-8 max-w-[31rem]">
              If you have a business model and ready to move it into reality,
              let us make that into a physical product. We can help in
              delivering business models into actual products so the value
              proposition can be delivered on immediate basis, thus translating
              value creation and revenue streams.
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

export default Startups;
