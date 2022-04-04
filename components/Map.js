import { HomeIcon, PhoneIcon } from "@heroicons/react/solid";

const Map = () => {
  return (
    <div>
      <div className="max-w-[80rem] mx-auto p-8 lg:p-4">
        <div className="relative flex flex-col gap-8">
          <img src="/map.webp" className="w-full hidden lg:block" />
          <div className="lg:absolute top-[40%] left-[10%] z-20 flex flex-col justify-start items-start outermap">
            <img src="/logo.svg" alt="" className="w-[10rem]" />
            <p>USA</p>
            <div className="innermap flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-4">
                <HomeIcon className="w-6" />
                <p className="max-w-[15rem]">
                  5100 Goldleaf Cir #208, Los Angeles, CA 90056, United States
                </p>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6" />
                <p className="max-w-[15rem]">+1(510) 857-4130</p>
              </div>
            </div>
          </div>
          <div className="lg:absolute top-[40%] right-[10%] z-20 flex flex-col justify-start items-start outermap ">
            <img src="/logo.svg" alt="" className="w-[10rem]" />
            <p>Pakistan</p>
            <div className="innermap flex flex-col gap-4 mt-4">
              <div className="flex items-start gap-4">
                <HomeIcon className="w-6" />
                <p className="max-w-[15rem]">
                  Suite 1208, 12th Floor, Noor Trade Center, University Rd,
                  Block 13 A Gulshan-e-Iqbal, Karachi, Karachi City, Sindh 75300
                </p>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="w-6" />
                <p className="max-w-[15rem]">03369977009</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
